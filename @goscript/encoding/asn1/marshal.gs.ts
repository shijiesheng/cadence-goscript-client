// Generated file based on marshal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as big from "@goscript/math/big/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as slices from "@goscript/slices/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_asn1 from "./asn1.gs.ts"

import * as __goscript_common from "./common.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/big/index.js"
import "@goscript/reflect/index.js"
import "@goscript/slices/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "./asn1.gs.ts"
import "./common.gs.ts"

$.registerTypePackagePath("encoding/asn1", ["asn1.encoder", "asn1.byteEncoder", "asn1.bytesEncoder", "asn1.stringEncoder", "asn1.multiEncoder", "asn1.setEncoder", "asn1.taggedEncoder", "asn1.int64Encoder", "asn1.bitStringEncoder", "asn1.oidEncoder"])

export type encoder = {
	Encode(dst: $.Slice<number>): void
	Len(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"asn1.encoder",
	null,
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type byteEncoder = number

$.registerNamedValueType(
	"asn1.byteEncoder",
	{Encode: (receiver: any, ...args: any[]) => (byteEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (byteEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.byteEncoder",
	{Encode: (receiver: any, ...args: any[]) => (byteEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (byteEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type bytesEncoder = $.Slice<number>

$.registerNamedType("asn1.bytesEncoder", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"asn1.bytesEncoder",
	{Encode: (receiver: any, ...args: any[]) => (bytesEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (bytesEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.bytesEncoder",
	{Encode: (receiver: any, ...args: any[]) => (bytesEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (bytesEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type stringEncoder = string

$.registerNamedValueType(
	"asn1.stringEncoder",
	{Encode: (receiver: any, ...args: any[]) => (stringEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (stringEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.stringEncoder",
	{Encode: (receiver: any, ...args: any[]) => (stringEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (stringEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type multiEncoder = $.Slice<encoder | null>

$.registerNamedType("asn1.multiEncoder", /* @__PURE__ */ $.sliceType("asn1.encoder"));

$.registerNamedValueType(
	"asn1.multiEncoder",
	{Encode: (receiver: any, ...args: any[]) => (multiEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (multiEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.multiEncoder",
	{Encode: (receiver: any, ...args: any[]) => (multiEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (multiEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type setEncoder = $.Slice<encoder | null>

$.registerNamedType("asn1.setEncoder", /* @__PURE__ */ $.sliceType("asn1.encoder"));

$.registerNamedValueType(
	"asn1.setEncoder",
	{Encode: (receiver: any, ...args: any[]) => (setEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (setEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.setEncoder",
	{Encode: (receiver: any, ...args: any[]) => (setEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (setEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type int64Encoder = bigint

$.registerNamedValueType(
	"asn1.int64Encoder",
	{Encode: (receiver: any, ...args: any[]) => (int64Encoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (int64Encoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.int64Encoder",
	{Encode: (receiver: any, ...args: any[]) => (int64Encoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (int64Encoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type oidEncoder = $.Slice<number>

$.registerNamedType("asn1.oidEncoder", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")));

$.registerNamedValueType(
	"asn1.oidEncoder",
	{Encode: (receiver: any, ...args: any[]) => (oidEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (oidEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*asn1.oidEncoder",
	{Encode: (receiver: any, ...args: any[]) => (oidEncoder_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (oidEncoder_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class taggedEncoder {
	// scratch contains temporary space for encoding the tag and length of
	// an element in order to avoid extra allocations.
	public get scratch(): Uint8Array {
		return this._fields.scratch
	}

	public set scratch(value: Uint8Array) {
		this._fields.scratch = value
	}

	public get tag(): encoder | null {
		return this._fields.tag
	}

	public set tag(value: encoder | null) {
		this._fields.tag = value
	}

	public get body(): encoder | null {
		return this._fields.body
	}

	public set body(value: encoder | null) {
		this._fields.body = value
	}

	public _fields: {
		scratch: Uint8Array
		tag: encoder | null
		body: encoder | null
	}

	constructor(init?: Partial<{scratch?: Uint8Array, tag?: encoder | null, body?: encoder | null}>, __goscriptValue?: boolean) {
		this._fields = {
			scratch: init?.scratch !== undefined ? $.cloneArrayValue(init.scratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8)),
			tag: init?.tag ?? (null! as encoder | null),
			body: init?.body ?? (null! as encoder | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): taggedEncoder {
		return new taggedEncoder(this, true)
	}

	public __goscriptAssign(source: taggedEncoder): void {
		const target = this._fields
		const values = source._fields
		target.scratch = $.assignFieldValue(target.scratch, values.scratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
		target.tag = $.assignFieldValue(target.tag, values.tag, "asn1.encoder")
		target.body = $.assignFieldValue(target.body, values.body, "asn1.encoder")
	}

	public async Encode(dst: $.Slice<number>): globalThis.Promise<void> {
		const t: taggedEncoder | $.VarRef<taggedEncoder> | null = this;
		const t$: taggedEncoder = t == null ? $.pointerTarget<taggedEncoder>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<taggedEncoder>(t)
		void (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).tag).Encode(dst), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).body).Encode($.goSlice(dst, (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).tag).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Len(): globalThis.Promise<number> {
		const t: taggedEncoder | $.VarRef<taggedEncoder> | null = this;
		const t$: taggedEncoder = t == null ? $.pointerTarget<taggedEncoder>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<taggedEncoder>(t)
		return (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).tag).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).body).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"asn1.taggedEncoder",
		() => new taggedEncoder(),
		() => [$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true)],
		taggedEncoder,
		() => [/* @__PURE__ */ $.structField("scratch", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [0], 0, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("tag", "asn1.encoder", [1], 8, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("body", "asn1.encoder", [2], 24, false, { pkgPath: "encoding/asn1" })]
	)
}

export class bitStringEncoder {
	public get Bytes(): $.Slice<number> {
		return this._fields.Bytes
	}

	public set Bytes(value: $.Slice<number>) {
		this._fields.Bytes = value
	}

	public get BitLength(): number {
		return this._fields.BitLength
	}

	public set BitLength(value: number) {
		this._fields.BitLength = value
	}

	public _fields: {
		Bytes: $.Slice<number>
		BitLength: number
	}

	constructor(init?: Partial<{Bytes?: $.Slice<number>, BitLength?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Bytes: init?.Bytes ?? (null! as $.Slice<number>),
			BitLength: init?.BitLength ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bitStringEncoder {
		return new bitStringEncoder(this, true)
	}

	public __goscriptAssign(source: bitStringEncoder): void {
		const target = this._fields
		const values = source._fields
		target.Bytes = values.Bytes
		target.BitLength = values.BitLength
	}

	public Encode(dst: $.Slice<number>): void {
		const b = this;
		$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.uint((8 - (b.BitLength % 8)) % 8, 8)
		if ($.copy($.goSlice(dst, 1, undefined), b.Bytes) != $.sliceLen(b.Bytes)) {
			$.panic("internal error")
		}
	}

	public Len(): number {
		const b = this;
		return $.sliceLen(b.Bytes) + 1
	}

	static __typeInfo = $.registerStructType(
		"asn1.bitStringEncoder",
		() => new bitStringEncoder(),
		() => [$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])],
		bitStringEncoder,
		() => [/* @__PURE__ */ $.structField("Bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("BitLength", /* @__PURE__ */ $.basicType("int"), [1], 24, true)]
	)
}

export let byte00Encoder: encoder | null = $.namedValueInterfaceValue<encoder | null>(0x00, "asn1.byteEncoder", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())

export function __goscript_set_byte00Encoder(__goscriptValue: encoder | null): void {
	byte00Encoder = __goscriptValue
}

export let byteFFEncoder: encoder | null = $.namedValueInterfaceValue<encoder | null>(0xff, "asn1.byteEncoder", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())

export function __goscript_set_byteFFEncoder(__goscriptValue: encoder | null): void {
	byteFFEncoder = __goscriptValue
}

export function byteEncoder_Len(c: byteEncoder): number {
	return 1
}

export function byteEncoder_Encode(c: byteEncoder, dst: $.Slice<number>): void {
	$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.uint(c, 8)
}

export function bytesEncoder_Len(b: bytesEncoder): number {
	return $.sliceLen((b as bytesEncoder))
}

export function bytesEncoder_Encode(b: bytesEncoder, dst: $.Slice<number>): void {
	if ($.copy(dst, (b as bytesEncoder)) != $.sliceLen((b as bytesEncoder))) {
		$.panic("internal error")
	}
}

export function stringEncoder_Len(s: stringEncoder): number {
	return $.stringLen(s)
}

export function stringEncoder_Encode(s: stringEncoder, dst: $.Slice<number>): void {
	if ($.copy(dst, s) != $.stringLen(s)) {
		$.panic("internal error")
	}
}

export async function multiEncoder_Len(m: multiEncoder): globalThis.Promise<number> {
	let size: number = 0
	for (let __goscriptRangeTarget0 = m, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as encoder | null)
		size = size + ((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return size
}

export async function multiEncoder_Encode(m: multiEncoder, dst: $.Slice<number>): globalThis.Promise<void> {
	let off: number = 0
	for (let __goscriptRangeTarget1 = m, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as encoder | null)
		void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Encode($.goSlice(dst, off, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		off = off + ((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
}

export async function setEncoder_Len(s: setEncoder): globalThis.Promise<number> {
	let size: number = 0
	for (let __goscriptRangeTarget2 = s, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as encoder | null)
		size = size + ((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return size
}

export async function setEncoder_Encode(s: setEncoder, dst: $.Slice<number>): globalThis.Promise<void> {
	// Per X690 Section 11.6: The encodings of the component values of a
	// set-of value shall appear in ascending order, the encodings being
	// compared as octet strings with the shorter components being padded
	// at their trailing end with 0-octets.
	//
	// First we encode each element to its TLV encoding and then use
	// octetSort to get the ordering expected by X690 DER rules before
	// writing the sorted encodings out to dst.
	let l: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>($.sliceLen((s as setEncoder)))
	for (let __goscriptRangeTarget3 = s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow0 = $.sliceRange(l), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let e = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as encoder | null);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.makeSlice<number>((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "byte")
		void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Encode(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as $.Slice<number>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	// Since we are using bytes.Compare to compare TLV encodings we
	// don't need to right pad s[i] and s[j] to the same length as
	// suggested in X690. If len(s[i]) < len(s[j]) the length octet of
	// s[i], which is the first determining byte, will inherently be
	// smaller than the length octet of s[j]. This lets us skip the
	// padding step.
	slices.SortFunc(l, bytes2.Compare)

	let off: number = 0
	for (let __goscriptRangeTarget4 = l, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as $.Slice<number>)
		$.copy($.goSlice(dst, off, undefined), b)
		off = off + ($.sliceLen(b))
	}
}

export function int64Encoder_Len(i: int64Encoder): number {
	let n = 1

	while (i > 127n) {
		n++
		i = $.int64Shr(i, 8n)
	}

	while (i < -128n) {
		n++
		i = $.int64Shr(i, 8n)
	}

	return n
}

export function int64Encoder_Encode(i: int64Encoder, dst: $.Slice<number>): void {
	let n = int64Encoder_Len(i)

	for (let __goscriptSliceWindow1 = $.sliceRange(dst), j = 0; j < n; j++) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] = $.uint($.int64Shr(i, $.uint(((n - 1) - j) * 8, 64)), 8)
	}
}

export function base128IntLength(n: bigint): number {
	if (n == 0n) {
		return 1
	}

	let l = 0
	for (let i = n; i > 0n; i = $.int64Shr(i, 7n)) {
		l++
	}

	return l
}

export function appendBase128Int(dst: $.Slice<number>, n: bigint): $.Slice<number> {
	let l = base128IntLength(n)

	for (let i = l - 1; i >= 0; i--) {
		let o = $.uint($.int64Shr(n, $.uint(i * 7, 64)), 8)
		o = o & (0x7f)
		if (i != 0) {
			o = o | (0x80)
		}

		dst = $.append(dst, $.uint(o, 8), $.byteSliceHint)
	}

	return dst
}

export function makeBigInt(n: big.Int | $.VarRef<big.Int> | null): [encoder | null, $.GoError] {
	if (n == null) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "empty integer"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}

	if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Sign() : big.Int.prototype.Sign.call(n)) < 0) {
		// A negative number has to be converted to two's-complement
		// form. So we'll invert and subtract 1. If the
		// most-significant-bit isn't set then we'll need to pad the
		// beginning with 0xff in order to keep the number negative.
		let nMinus1: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Neg.call(new big.Int(), n)
		void (nMinus1 !== null && (nMinus1 as any).__isVarRef !== true && (nMinus1 as any).__goValue === undefined ? ((nMinus1 as any) as big.Int).Sub(nMinus1, __goscript_asn1.bigOne) : big.Int.prototype.Sub.call(nMinus1, nMinus1, __goscript_asn1.bigOne))
		let __goscriptShadow0: $.Slice<number> = (nMinus1 !== null && (nMinus1 as any).__isVarRef !== true && (nMinus1 as any).__goValue === undefined ? ((nMinus1 as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(nMinus1))
		for (let __goscriptRangeTarget5 = __goscriptShadow0, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			;(__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] = (__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] ^ (0xff)
		}
		if (($.sliceLen(__goscriptShadow0) == 0) || ($.uint(($.arrayIndex(__goscriptShadow0!, 0) & 0x80), 8) == 0)) {
			return [$.namedValueInterfaceValue<encoder | null>(($.arrayToSlice<encoder | null>([byteFFEncoder, $.namedValueInterfaceValue<encoder | null>((__goscriptShadow0 as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())]) as multiEncoder), "asn1.multiEncoder", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()), null]
		}
		return [$.namedValueInterfaceValue<encoder | null>((__goscriptShadow0 as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
	} else {
		if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Sign() : big.Int.prototype.Sign.call(n)) == 0) {
			// Zero is written as a single 0 zero rather than no bytes.
			return [byte00Encoder, null]
		} else {
			let __goscriptShadow1: $.Slice<number> = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(n))
			if (($.sliceLen(__goscriptShadow1) > 0) && ($.uint(($.arrayIndex(__goscriptShadow1!, 0) & 0x80), 8) != 0)) {
				// We'll have to pad this with 0x00 in order to stop it
				// looking like a negative number.
				return [$.namedValueInterfaceValue<encoder | null>(($.arrayToSlice<encoder | null>([byte00Encoder, $.namedValueInterfaceValue<encoder | null>((__goscriptShadow1 as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())]) as multiEncoder), "asn1.multiEncoder", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()), null]
			}
			return [$.namedValueInterfaceValue<encoder | null>((__goscriptShadow1 as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function appendLength(dst: $.Slice<number>, i: number): $.Slice<number> {
	let n = lengthLength(i)

	for (; n > 0; n--) {
		dst = $.append(dst, $.uint($.uint(i >> $.uint((n - 1) * 8, 64), 8), 8), $.byteSliceHint)
	}

	return dst
}

export function lengthLength(i: number): number {
	let numBytes: number = 0
	numBytes = 1
	while (i > 255) {
		numBytes++
		i = i >> (8)
	}
	return numBytes
}

export function appendTagAndLength(dst: $.Slice<number>, t: __goscript_common.tagAndLength): $.Slice<number> {
	let b = $.uint((($.uint(t._class, 8) << 6) & 0xff), 8)
	if (t.isCompound) {
		b = b | (0x20)
	}
	if (t.tag >= 31) {
		b = b | (0x1f)
		dst = $.append(dst, $.uint(b, 8), $.byteSliceHint)
		dst = appendBase128Int(dst, $.int64(t.tag))
	} else {
		b = b | ($.uint(t.tag, 8))
		dst = $.append(dst, $.uint(b, 8), $.byteSliceHint)
	}

	if (t.length >= 128) {
		let l = lengthLength(t.length)
		dst = $.append(dst, $.uint(0x80 | $.uint(l, 8), 8), $.byteSliceHint)
		dst = appendLength(dst, t.length)
	} else {
		dst = $.append(dst, $.uint($.uint(t.length, 8), 8), $.byteSliceHint)
	}

	return dst
}

export function oidEncoder_Len(oid: oidEncoder): number {
	let l = base128IntLength($.int64(($.arrayIndex(oid!, 0) * 40) + $.arrayIndex(oid!, 1)))
	for (let __goscriptSliceWindow2 = $.sliceRange(oid), i = 2; i < __goscriptSliceWindow2.length; i++) {
		l = l + (base128IntLength($.int64(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number))))
	}
	return l
}

export function oidEncoder_Encode(oid: oidEncoder, dst: $.Slice<number>): void {
	dst = appendBase128Int($.goSlice(dst, undefined, 0), $.int64(($.arrayIndex(oid!, 0) * 40) + $.arrayIndex(oid!, 1)))
	for (let __goscriptSliceWindow3 = $.sliceRange(oid), i = 2; i < __goscriptSliceWindow3.length; i++) {
		dst = appendBase128Int(dst, $.int64(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as number)))
	}
}

export function makeObjectIdentifier(oid: $.Slice<number>): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	if ((($.sliceLen(oid) < 2) || ($.arrayIndex(oid!, 0) > 2)) || (($.arrayIndex(oid!, 0) < 2) && ($.arrayIndex(oid!, 1) >= 40))) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "invalid object identifier"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}

	return [$.namedValueInterfaceValue<encoder | null>((oid as oidEncoder), "asn1.oidEncoder", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2()), null]
}

export function makePrintableString(s: string): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	for (let i = 0; i < $.stringLen(s); i++) {
		// The asterisk is often used in PrintableString, even though
		// it is invalid. If a PrintableString was specifically
		// requested then the asterisk is permitted by this code.
		// Ampersand is allowed in parsing due a handful of CA
		// certificates, however when making new certificates
		// it is rejected.
		if (!__goscript_asn1.isPrintable($.indexString(s, i), true, false)) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "PrintableString contains invalid character"}, true), "asn1.StructuralError", "asn1.StructuralError")]
		}
	}

	return [$.namedValueInterfaceValue<encoder | null>(s, "asn1.stringEncoder", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()), null]
}

export function makeIA5String(s: string): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) > 127) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "IA5String contains invalid character"}, true), "asn1.StructuralError", "asn1.StructuralError")]
		}
	}

	return [$.namedValueInterfaceValue<encoder | null>(s, "asn1.stringEncoder", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()), null]
}

export function makeNumericString(s: string): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	for (let i = 0; i < $.stringLen(s); i++) {
		if (!__goscript_asn1.isNumeric($.indexString(s, i))) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "NumericString contains invalid character"}, true), "asn1.StructuralError", "asn1.StructuralError")]
		}
	}

	return [$.namedValueInterfaceValue<encoder | null>(s, "asn1.stringEncoder", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()), null]
}

export function makeUTF8String(s: string): encoder | null {
	return $.namedValueInterfaceValue<encoder | null>(s, "asn1.stringEncoder", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2())
}

export function appendTwoDigits(dst: $.Slice<number>, v: number): $.Slice<number> {
	return $.append(dst, $.uint($.uint(48 + ((globalThis.Math.trunc(v / 10)) % 10), 8), 8), $.uint($.uint(48 + (v % 10), 8), 8), $.byteSliceHint)
}

export function appendFourDigits(dst: $.Slice<number>, v: number): $.Slice<number> {
	return $.append(dst, $.uint($.uint(48 + ((globalThis.Math.trunc(v / 1000)) % 10), 8), 8), $.uint($.uint(48 + ((globalThis.Math.trunc(v / 100)) % 10), 8), 8), $.uint($.uint(48 + ((globalThis.Math.trunc(v / 10)) % 10), 8), 8), $.uint($.uint(48 + (v % 10), 8), 8), $.byteSliceHint)
}

export function outsideUTCRange(t: time.Time): boolean {
	let year = $.markAsStructValue($.cloneStructValue(t)).Year()
	return (year < 1950) || (year >= 2050)
}

export function makeUTCTime(t: time.Time): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	let dst: $.Slice<number> = $.makeSlice<number>(0, 18, "byte")

	let __goscriptTuple0: any = appendUTCTime(dst, t)
	dst = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}

	return [$.namedValueInterfaceValue<encoder | null>((dst as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
}

export function makeGeneralizedTime(t: time.Time): [encoder | null, $.GoError] {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	let dst: $.Slice<number> = $.makeSlice<number>(0, 20, "byte")

	let __goscriptTuple1: any = appendGeneralizedTime(dst, t)
	dst = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}

	return [$.namedValueInterfaceValue<encoder | null>((dst as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
}

export function appendUTCTime(dst: $.Slice<number>, t: time.Time): [$.Slice<number>, $.GoError] {
	let ret: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	let year = $.markAsStructValue($.cloneStructValue(t)).Year()

	switch ((true as boolean)) {
		case (1950 <= year) && (year < 2000):
		{
			dst = appendTwoDigits(dst, year - 1900)
			break
		}
		case (2000 <= year) && (year < 2050):
		{
			dst = appendTwoDigits(dst, year - 2000)
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "cannot represent time as UTCTime"}, true), "asn1.StructuralError", "asn1.StructuralError")]
			break
		}
	}

	return [appendTimeCommon(dst, t), null]
}

export function appendGeneralizedTime(dst: $.Slice<number>, t: time.Time): [$.Slice<number>, $.GoError] {
	let ret: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	let year = $.markAsStructValue($.cloneStructValue(t)).Year()
	if ((year < 0) || (year > 9999)) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "cannot represent time as GeneralizedTime"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}

	dst = appendFourDigits(dst, year)

	return [appendTimeCommon(dst, t), null]
}

export function appendTimeCommon(dst: $.Slice<number>, t: time.Time): $.Slice<number> {
	let [, month, day] = $.markAsStructValue($.cloneStructValue(t)).Date()

	dst = appendTwoDigits(dst, $.int(month))
	dst = appendTwoDigits(dst, day)

	let [hour, min, sec] = $.markAsStructValue($.cloneStructValue(t)).Clock()

	dst = appendTwoDigits(dst, hour)
	dst = appendTwoDigits(dst, min)
	dst = appendTwoDigits(dst, sec)

	let [, offset] = $.markAsStructValue($.cloneStructValue(t)).Zone()

	switch ((true as boolean)) {
		case (globalThis.Math.trunc(offset / 60)) == 0:
		{
			return $.append(dst, $.uint(90, 8), $.byteSliceHint)
			break
		}
		case offset > 0:
		{
			dst = $.append(dst, $.uint(43, 8), $.byteSliceHint)
			break
		}
		case offset < 0:
		{
			dst = $.append(dst, $.uint(45, 8), $.byteSliceHint)
			break
		}
	}

	let offsetMinutes = globalThis.Math.trunc(offset / 60)
	if (offsetMinutes < 0) {
		offsetMinutes = -offsetMinutes
	}

	dst = appendTwoDigits(dst, globalThis.Math.trunc(offsetMinutes / 60))
	dst = appendTwoDigits(dst, offsetMinutes % 60)

	return dst
}

export function stripTagAndLength(_in: $.Slice<number>): $.Slice<number> {
	let [, offset, err] = __goscript_asn1.parseTagAndLength(_in, 0)
	if (err != null) {
		return _in
	}
	return $.goSlice(_in, offset, undefined)
}

export async function makeBody(value: reflect.Value, params: __goscript_common.fieldParameters): globalThis.Promise<[encoder | null, $.GoError]> {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	{
		let __goscriptSwitch0 = $.markAsStructValue($.cloneStructValue(value)).Type()
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.flagType):
			{
				return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.timeType):
			{
				let __goscriptTuple2: any = reflect.TypeAssert(__goscriptStatic11(), $.markAsStructValue($.cloneStructValue(value)))
				let t = (__goscriptTuple2[0] as time.Time)
				if ((params.timeType == 24) || outsideUTCRange(t)) {
					return makeGeneralizedTime(t)
				}
				return makeUTCTime(t)
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.bitStringType):
			{
				let __goscriptTuple3: any = reflect.TypeAssert(__goscriptStatic12(), $.markAsStructValue($.cloneStructValue(value)))
				let v = (__goscriptTuple3[0] as __goscript_asn1.BitString)
				return [$.interfaceValue<encoder | null>(((() => { const __goscriptConvert0 = v; return $.markAsStructValue(new bitStringEncoder({Bytes: __goscriptConvert0.Bytes, BitLength: __goscriptConvert0.BitLength})) })()).clone(), "asn1.bitStringEncoder", "asn1.bitStringEncoder"), null]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.objectIdentifierType):
			{
				let __goscriptTuple4: any = reflect.TypeAssert(__goscriptStatic13(), $.markAsStructValue($.cloneStructValue(value)))
				let v: __goscript_asn1.ObjectIdentifier = ((__goscriptTuple4[0] as __goscript_asn1.ObjectIdentifier) as __goscript_asn1.ObjectIdentifier)
				return makeObjectIdentifier(v)
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.bigIntType):
			{
				let __goscriptTuple5: any = reflect.TypeAssert(__goscriptStatic14(), $.markAsStructValue($.cloneStructValue(value)))
				let v: big.Int | $.VarRef<big.Int> | null = (__goscriptTuple5[0] as big.Int | $.VarRef<big.Int> | null)
				return makeBigInt(v)
				break
			}
		}
	}

	{
		let v = $.markAsStructValue($.cloneStructValue(value))
		switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
			case reflect.Bool:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).Bool()) {
					return [byteFFEncoder, null]
				}
				return [byte00Encoder, null]
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				return [$.namedValueInterfaceValue<encoder | null>($.int64($.markAsStructValue($.cloneStructValue(v)).Int()), "asn1.int64Encoder", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic2()), null]
				break
			}
			case reflect.Struct:
			{
				let t = $.markAsStructValue($.cloneStructValue(v)).Type()

				for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					if (!$.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))).IsExported()) {
						return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "struct contains unexported fields"}, true), "asn1.StructuralError", "asn1.StructuralError")]
					}
				}

				let startingField = 0

				let n = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (n == 0) {
					return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
				}

				// If the first element of the structure is a non-empty
				// RawContents, then we don't bother serializing the rest.
				if ($.comparableEqual(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type, __goscript_asn1.rawContentsType)) {
					let s = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(0)))
					if ($.markAsStructValue($.cloneStructValue(s)).Len() > 0) {
						let __goscriptShadow2: $.Slice<number> = $.markAsStructValue($.cloneStructValue(s)).Bytes()
						/* The RawContents will contain the tag and
										 * length fields but we'll also be writing
										 * those ourselves, so we strip them out of
										 * bytes */
						return [$.namedValueInterfaceValue<encoder | null>((stripTagAndLength(__goscriptShadow2) as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
					}

					startingField = 1
				}

				{
					let n1 = n - startingField
					switch (n1) {
						case 0:
						{
							return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
							break
						}
						case 1:
						{
							return makeField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(startingField))), __goscript_common.parseFieldParameters(reflect.StructTag_Get(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(startingField), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Tag, "asn1")))
							break
						}
						default:
						{
							let m: $.Slice<encoder | null> = $.makeSlice<encoder | null>(n1)
							for (let __goscriptSliceWindow4 = $.sliceRange(m), i = 0; i < n1; i++) {
								let __goscriptTuple6: any = await makeField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i + startingField))), __goscript_common.parseFieldParameters(reflect.StructTag_Get(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i + startingField), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Tag, "asn1")));
								;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = __goscriptTuple6[0]
								err = __goscriptTuple6[1]
								if (err != null) {
									return [null, err]
								}
							}

							return [$.namedValueInterfaceValue<encoder | null>((m as multiEncoder), "asn1.multiEncoder", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()), null]
							break
						}
					}
				}
				break
			}
			case reflect.Slice:
			{
				let sliceType = $.markAsStructValue($.cloneStructValue(v)).Type()
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (sliceType !== null && (sliceType as any).__isVarRef !== true && (sliceType as any).__goValue === undefined ? (sliceType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(sliceType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
					return [$.namedValueInterfaceValue<encoder | null>(($.markAsStructValue($.cloneStructValue(v)).Bytes() as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
				}

				let fp: __goscript_common.fieldParameters = new __goscript_common.fieldParameters(undefined, true)

				{
					let l = $.markAsStructValue($.cloneStructValue(v)).Len()
					switch (l) {
						case 0:
						{
							return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
							break
						}
						case 1:
						{
							return makeField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(0))), (fp).clone())
							break
						}
						default:
						{
							let m: $.Slice<encoder | null> = $.makeSlice<encoder | null>(l)

							for (let __goscriptSliceWindow5 = $.sliceRange(m), i = 0; i < l; i++) {
								let __goscriptTuple7: any = await makeField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))), (fp).clone());
								;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = __goscriptTuple7[0]
								err = __goscriptTuple7[1]
								if (err != null) {
									return [null, err]
								}
							}

							if (params._set) {
								return [$.namedValueInterfaceValue<encoder | null>((m as setEncoder), "asn1.setEncoder", __goscriptStatic17(), __goscriptStatic18(), __goscriptStatic2()), null]
							}
							return [$.namedValueInterfaceValue<encoder | null>((m as multiEncoder), "asn1.multiEncoder", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()), null]
							break
						}
					}
				}
				break
			}
			case reflect.String:
			{
				switch (params.stringType) {
					case 22:
					{
						return makeIA5String($.markAsStructValue($.cloneStructValue(v)).String())
						break
					}
					case 19:
					{
						return makePrintableString($.markAsStructValue($.cloneStructValue(v)).String())
						break
					}
					case 18:
					{
						return makeNumericString($.markAsStructValue($.cloneStructValue(v)).String())
						break
					}
					default:
					{
						return [makeUTF8String($.markAsStructValue($.cloneStructValue(v)).String()), null]
						break
					}
				}
				break
			}
		}
	}

	return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "unknown Go type"}, true), "asn1.StructuralError", "asn1.StructuralError")]
}

export async function makeField(v: reflect.Value, params: __goscript_common.fieldParameters): globalThis.Promise<[encoder | null, $.GoError]> {
	let e: encoder | null = null! as encoder | null
	let err: $.GoError = null! as $.GoError
	if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
		return [null, fmt.Errorf("asn1: cannot marshal nil value")]
	}
	// If the field is an interface{} then recurse into it.
	if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 20) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
		return makeField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())), (params).clone())
	}

	if ((($.markAsStructValue($.cloneStructValue(v)).Kind() == 23) && ($.markAsStructValue($.cloneStructValue(v)).Len() == 0)) && params.omitEmpty) {
		return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
	}

	if ((params.optional && (params.defaultValue != null)) && __goscript_asn1.canHaveDefaultValue($.markAsStructValue($.cloneStructValue(v)).Kind())) {
		let defaultValue = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!))).Elem()))
		$.markAsStructValue($.cloneStructValue(defaultValue)).SetInt($.pointerValue<bigint>(params.defaultValue))

		if (reflect.DeepEqual($.markAsStructValue($.cloneStructValue(v)).Interface(), $.markAsStructValue($.cloneStructValue(defaultValue)).Interface())) {
			return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
		}
	}

	// If no default value is given then the zero value for the type is
	// assumed to be the default value. This isn't obviously the correct
	// behavior, but it's what Go has traditionally done.
	if (params.optional && (params.defaultValue == null)) {
		if (reflect.DeepEqual($.markAsStructValue($.cloneStructValue(v)).Interface(), $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!))).Interface())) {
			return [$.namedValueInterfaceValue<encoder | null>((null as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
		}
	}

	if ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), __goscript_asn1.rawValueType)) {
		let __goscriptTuple8: any = reflect.TypeAssert(__goscriptStatic19(), $.markAsStructValue($.cloneStructValue(v)))
		let rv = (__goscriptTuple8[0] as __goscript_asn1.RawValue)
		if ($.sliceLen(rv.FullBytes) != 0) {
			return [$.namedValueInterfaceValue<encoder | null>((rv.FullBytes as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), null]
		}

		let t: taggedEncoder | $.VarRef<taggedEncoder> | null = new taggedEncoder()
		let t$: taggedEncoder = t == null ? $.pointerTarget<taggedEncoder>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<taggedEncoder>(t);

		;(t$ as taggedEncoder).tag = $.namedValueInterfaceValue<encoder | null>((appendTagAndLength($.goSlice((t$ as taggedEncoder).scratch, undefined, 0), new __goscript_common.tagAndLength({_class: rv.Class, tag: rv.Tag, length: $.sliceLen(rv.Bytes), isCompound: rv.IsCompound}, true)) as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2());
		;(t$ as taggedEncoder).body = $.namedValueInterfaceValue<encoder | null>((rv.Bytes as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())

		return [$.interfaceValue<encoder | null>(t, "*asn1.taggedEncoder", /* @__PURE__ */ $.pointerType("asn1.taggedEncoder")), null]
	}

	let [matchAny, tag, isCompound, ok] = await __goscript_common.getUniversalType($.markAsStructValue($.cloneStructValue(v)).Type())
	if (!ok || matchAny) {
		return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("unknown Go type: %v", ($.markAsStructValue($.cloneStructValue(v)).Type() as any)); return new __goscript_asn1.StructuralError({Msg: __goscriptLiteralField0}, true) })()), "asn1.StructuralError", "asn1.StructuralError")]
	}

	if ((params.timeType != 0) && (tag != 23)) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "explicit time type given to non-time member"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}

	if ((params.stringType != 0) && (tag != 19)) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "explicit string type given to non-string member"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}

	switch (tag) {
		case 19:
		{
			if (params.stringType == 0) {
				// This is a string without an explicit string type. We'll use
				// a PrintableString if the character set in the string is
				// sufficiently limited, otherwise we'll use a UTF8String.
				for (let __goscriptRunes0 = $.stringRunes($.markAsStructValue($.cloneStructValue(v)).String()); __goscriptRunes0.next(); ) {
					const r = __goscriptRunes0.rune
					if ((r >= 128) || !__goscript_asn1.isPrintable($.uint(r, 8), false, false)) {
						if (!utf8.ValidString($.markAsStructValue($.cloneStructValue(v)).String())) {
							return [null, errors.New("asn1: string not valid UTF-8")]
						}
						tag = 12
						break
					}
				}
			} else {
				tag = params.stringType
			}
			break
		}
		case 23:
		{
			let __goscriptTuple9: any = reflect.TypeAssert(__goscriptStatic11(), $.markAsStructValue($.cloneStructValue(v)))
			let t = (__goscriptTuple9[0] as time.Time)
			if ((params.timeType == 24) || outsideUTCRange(t)) {
				tag = 24
			}
			break
		}
	}

	if (params._set) {
		if (tag != 16) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_asn1.StructuralError({Msg: "non sequence tagged as set"}, true), "asn1.StructuralError", "asn1.StructuralError")]
		}
		tag = 17
	}

	// makeField can be called for a slice that should be treated as a SET
	// but doesn't have params.set set, for instance when using a slice
	// with the SET type name suffix. In this case getUniversalType returns
	// TagSet, but makeBody doesn't know about that so will treat the slice
	// as a sequence. To work around this we set params.set.
	if ((tag == 17) && !params._set) {
		params._set = true
	}

	let t: taggedEncoder | $.VarRef<taggedEncoder> | null = new taggedEncoder()
	let t$: taggedEncoder = t == null ? $.pointerTarget<taggedEncoder>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<taggedEncoder>(t)

	let __goscriptTuple10: any = await makeBody(v, params);
	;(t$ as taggedEncoder).body = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}

	let bodyLen = (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).body).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	let _class = 0
	if (params.tag != null) {
		if (params.application) {
			_class = 1
		} else {
			if (params._private) {
				_class = 3
			} else {
				_class = 2
			}
		}

		if (params.explicit) {
			;(t$ as taggedEncoder).tag = $.namedValueInterfaceValue<encoder | null>((appendTagAndLength($.goSlice((t$ as taggedEncoder).scratch, undefined, 0), new __goscript_common.tagAndLength({_class: 0, tag: tag, length: bodyLen, isCompound: isCompound}, true)) as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())

			let tt: taggedEncoder | $.VarRef<taggedEncoder> | null = new taggedEncoder()
			let tt$: taggedEncoder = tt == null ? $.pointerTarget<taggedEncoder>(tt) : (tt as any).__isVarRef === true ? (tt as any).value : (tt as any).__goValue === undefined ? (tt as any) : $.pointerTarget<taggedEncoder>(tt);

			;(tt$ as taggedEncoder).body = $.interfaceValue<encoder | null>(t, "*asn1.taggedEncoder", /* @__PURE__ */ $.pointerType("asn1.taggedEncoder"));

			;(tt$ as taggedEncoder).tag = $.namedValueInterfaceValue<encoder | null>((appendTagAndLength($.goSlice((tt$ as taggedEncoder).scratch, undefined, 0), (await (async () => { const __goscriptLiteralField1 = bodyLen + (__goscriptAwait = $.pointerValue<Exclude<encoder, null>>((t$ as taggedEncoder).tag).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_common.tagAndLength({_class: _class, tag: $.pointerValue<number>(params.tag), length: __goscriptLiteralField1, isCompound: true}, true) })())) as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())

			return [$.interfaceValue<encoder | null>(tt, "*asn1.taggedEncoder", /* @__PURE__ */ $.pointerType("asn1.taggedEncoder")), null]
		}

		// implicit tag.
		tag = $.pointerValue<number>(params.tag)
	}

	;(t$ as taggedEncoder).tag = $.namedValueInterfaceValue<encoder | null>((appendTagAndLength($.goSlice((t$ as taggedEncoder).scratch, undefined, 0), new __goscript_common.tagAndLength({_class: _class, tag: tag, length: bodyLen, isCompound: isCompound}, true)) as bytesEncoder), "asn1.bytesEncoder", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())

	return [$.interfaceValue<encoder | null>(t, "*asn1.taggedEncoder", /* @__PURE__ */ $.pointerType("asn1.taggedEncoder")), null]
}

export async function Marshal(val: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return MarshalWithParams(val, "")
}

export async function MarshalWithParams(val: any, params: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let [e, err] = await makeField($.markAsStructValue($.cloneStructValue(reflect.ValueOf(val))), __goscript_common.parseFieldParameters(params))
	if (err != null) {
		return [null, err]
	}
	let b: $.Slice<number> = $.makeSlice<number>((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "byte")
	void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<encoder, null>) : $.pointerValue<Exclude<encoder, null>>(e)).Encode(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [b, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (byteEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (byteEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "asn1.byteEncoder"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Encode: (receiver: any, ...args: any[]) => (bytesEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (bytesEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.bytesEncoder"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Encode: (receiver: any, ...args: any[]) => (multiEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (multiEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.sliceType("asn1.encoder", "asn1.multiEncoder"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({Encode: (receiver: any, ...args: any[]) => (oidEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (oidEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.oidEncoder"))
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Encode: (receiver: any, ...args: any[]) => (stringEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (stringEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.basicType("string", "asn1.stringEncoder"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "time.Time", zero: () => $.markAsStructValue(new time.Time()), methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddDate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddDate(...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => $.pointerValue(receiver).After(...$.stripGenericTypeArgs(args)), AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), AppendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFormat(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Before(...$.stripGenericTypeArgs(args)), Clock: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clock(...$.stripGenericTypeArgs(args)), Compare: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Compare(...$.stripGenericTypeArgs(args)), Date: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Date(...$.stripGenericTypeArgs(args)), Day: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Day(...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Equal(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GoString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GoString(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Hour: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Hour(...$.stripGenericTypeArgs(args)), ISOWeek: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ISOWeek(...$.stripGenericTypeArgs(args)), In: (receiver: any, ...args: any[]) => $.pointerValue(receiver).In(...$.stripGenericTypeArgs(args)), IsDST: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsDST(...$.stripGenericTypeArgs(args)), IsZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsZero(...$.stripGenericTypeArgs(args)), Local: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Local(...$.stripGenericTypeArgs(args)), Location: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Location(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Minute: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Minute(...$.stripGenericTypeArgs(args)), Month: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Month(...$.stripGenericTypeArgs(args)), Nanosecond: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Nanosecond(...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Round(...$.stripGenericTypeArgs(args)), Second: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Second(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Truncate(...$.stripGenericTypeArgs(args)), UTC: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UTC(...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unix(...$.stripGenericTypeArgs(args)), UnixMicro: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMicro(...$.stripGenericTypeArgs(args)), UnixMilli: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMilli(...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixNano(...$.stripGenericTypeArgs(args)), Weekday: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Weekday(...$.stripGenericTypeArgs(args)), Year: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Year(...$.stripGenericTypeArgs(args)), YearDay: (receiver: any, ...args: any[]) => $.pointerValue(receiver).YearDay(...$.stripGenericTypeArgs(args)), Zone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Zone(...$.stripGenericTypeArgs(args)), ZoneBounds: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ZoneBounds(...$.stripGenericTypeArgs(args)), absSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).absSec(...$.stripGenericTypeArgs(args)), appendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormat(...$.stripGenericTypeArgs(args)), appendFormatRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormatRFC3339(...$.stripGenericTypeArgs(args)), appendStrictRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendStrictRFC3339(...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendTo(...$.stripGenericTypeArgs(args)), locabs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).locabs(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "asn1.BitString", zero: () => new __goscript_asn1.BitString(undefined, true), methods: {At: (receiver: any, ...args: any[]) => $.pointerValue(receiver).At(...$.stripGenericTypeArgs(args)), RightAlign: (receiver: any, ...args: any[]) => $.pointerValue(receiver).RightAlign(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), zero: () => null, methods: {Equal: (receiver: any, ...args: any[]) => (__goscript_asn1.ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_asn1.ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("big.Int"), zero: () => null, methods: {Abs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Abs(...$.stripGenericTypeArgs(args)), Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), And: (receiver: any, ...args: any[]) => $.pointerValue(receiver).And(...$.stripGenericTypeArgs(args)), AndNot: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AndNot(...$.stripGenericTypeArgs(args)), Append: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Append(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Binomial: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Binomial(...$.stripGenericTypeArgs(args)), Bit: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bit(...$.stripGenericTypeArgs(args)), BitLen: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BitLen(...$.stripGenericTypeArgs(args)), Bits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bits(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), Cmp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Cmp(...$.stripGenericTypeArgs(args)), CmpAbs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CmpAbs(...$.stripGenericTypeArgs(args)), Div: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Div(...$.stripGenericTypeArgs(args)), DivMod: (receiver: any, ...args: any[]) => $.pointerValue(receiver).DivMod(...$.stripGenericTypeArgs(args)), Divide: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Divide(...$.stripGenericTypeArgs(args)), Exp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Exp(...$.stripGenericTypeArgs(args)), FillBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FillBytes(...$.stripGenericTypeArgs(args)), Float64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Float64(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GCD: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GCD(...$.stripGenericTypeArgs(args)), GobDecode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobDecode(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Int64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Int64(...$.stripGenericTypeArgs(args)), IsInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsInt64(...$.stripGenericTypeArgs(args)), IsUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsUint64(...$.stripGenericTypeArgs(args)), Lsh: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Lsh(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Mod: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Mod(...$.stripGenericTypeArgs(args)), ModInverse: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ModInverse(...$.stripGenericTypeArgs(args)), ModSqrt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ModSqrt(...$.stripGenericTypeArgs(args)), Mul: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Mul(...$.stripGenericTypeArgs(args)), MulRange: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MulRange(...$.stripGenericTypeArgs(args)), Neg: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Neg(...$.stripGenericTypeArgs(args)), Not: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Not(...$.stripGenericTypeArgs(args)), Or: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Or(...$.stripGenericTypeArgs(args)), ProbablyPrime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ProbablyPrime(...$.stripGenericTypeArgs(args)), Quo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Quo(...$.stripGenericTypeArgs(args)), QuoRem: (receiver: any, ...args: any[]) => $.pointerValue(receiver).QuoRem(...$.stripGenericTypeArgs(args)), Rand: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rand(...$.stripGenericTypeArgs(args)), Rem: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rem(...$.stripGenericTypeArgs(args)), Rsh: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rsh(...$.stripGenericTypeArgs(args)), Scan: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Scan(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBit: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBit(...$.stripGenericTypeArgs(args)), SetBits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBits(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetInt64(...$.stripGenericTypeArgs(args)), SetString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetString(...$.stripGenericTypeArgs(args)), SetUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetUint64(...$.stripGenericTypeArgs(args)), Sign: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sign(...$.stripGenericTypeArgs(args)), Sqrt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sqrt(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Text: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Text(...$.stripGenericTypeArgs(args)), TrailingZeroBits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).TrailingZeroBits(...$.stripGenericTypeArgs(args)), Uint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Uint64(...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalJSON(...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalText(...$.stripGenericTypeArgs(args)), Xor: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Xor(...$.stripGenericTypeArgs(args)), exp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).exp(...$.stripGenericTypeArgs(args)), expSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).expSlow(...$.stripGenericTypeArgs(args)), lehmerGCD: (receiver: any, ...args: any[]) => $.pointerValue(receiver).lehmerGCD(...$.stripGenericTypeArgs(args)), modSqrt3Mod4Prime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrt3Mod4Prime(...$.stripGenericTypeArgs(args)), modSqrt5Mod8Prime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrt5Mod8Prime(...$.stripGenericTypeArgs(args)), modSqrtTonelliShanks: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrtTonelliShanks(...$.stripGenericTypeArgs(args)), mul: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mul(...$.stripGenericTypeArgs(args)), scaleDenom: (receiver: any, ...args: any[]) => $.pointerValue(receiver).scaleDenom(...$.stripGenericTypeArgs(args)), scan: (receiver: any, ...args: any[]) => $.pointerValue(receiver).scan(...$.stripGenericTypeArgs(args)), setFromScanner: (receiver: any, ...args: any[]) => $.pointerValue(receiver).setFromScanner(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({Encode: (receiver: any, ...args: any[]) => (int64Encoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (int64Encoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.basicType("int64", "asn1.int64Encoder"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ({Encode: (receiver: any, ...args: any[]) => (setEncoder_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (setEncoder_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= (/* @__PURE__ */ $.sliceType("asn1.encoder", "asn1.setEncoder"))
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "asn1.RawValue", zero: () => new __goscript_asn1.RawValue(undefined, true) }})
}

var __goscriptAwait: any
