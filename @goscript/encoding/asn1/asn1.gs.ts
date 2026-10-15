// Generated file based on asn1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as saferio from "@goscript/internal/saferio/index.js"

import * as math from "@goscript/math/index.js"

import * as big from "@goscript/math/big/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_common from "./common.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/saferio/index.js"
import "@goscript/math/index.js"
import "@goscript/math/big/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf16/index.js"
import "@goscript/unicode/utf8/index.js"
import "./common.gs.ts"

$.registerTypePackagePath("encoding/asn1", ["asn1.StructuralError", "asn1.SyntaxError", "asn1.BitString", "asn1.ObjectIdentifier", "asn1.Enumerated", "asn1.Flag", "asn1.asteriskFlag", "asn1.ampersandFlag", "asn1.RawValue", "asn1.RawContent", "asn1.invalidUnmarshalError"])

export type ObjectIdentifier = $.Slice<number>

$.registerNamedType("asn1.ObjectIdentifier", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")));

$.registerNamedValueType(
	"asn1.ObjectIdentifier",
	{Equal: (receiver: any, ...args: any[]) => (ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*asn1.ObjectIdentifier",
	{Equal: (receiver: any, ...args: any[]) => (ObjectIdentifier_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ObjectIdentifier_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Enumerated = number

export type Flag = boolean

export type asteriskFlag = boolean

export type ampersandFlag = boolean

export type RawContent = $.Slice<number>

$.registerNamedType("asn1.RawContent", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

export class StructuralError {
	public get Msg(): string {
		return this._fields.Msg
	}

	public set Msg(value: string) {
		this._fields.Msg = value
	}

	public _fields: {
		Msg: string
	}

	constructor(init?: Partial<{Msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Msg: init?.Msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StructuralError {
		return new StructuralError(this, true)
	}

	public __goscriptAssign(source: StructuralError): void {
		const target = this._fields
		const values = source._fields
		target.Msg = values.Msg
	}

	public Error(): string {
		const e = this;
		return $.concatString("asn1: structure error: ", e.Msg)
	}

	static __typeInfo = $.registerStructType(
		"asn1.StructuralError",
		() => new StructuralError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		StructuralError,
		() => [/* @__PURE__ */ $.structField("Msg", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class SyntaxError {
	public get Msg(): string {
		return this._fields.Msg
	}

	public set Msg(value: string) {
		this._fields.Msg = value
	}

	public _fields: {
		Msg: string
	}

	constructor(init?: Partial<{Msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Msg: init?.Msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SyntaxError {
		return new SyntaxError(this, true)
	}

	public __goscriptAssign(source: SyntaxError): void {
		const target = this._fields
		const values = source._fields
		target.Msg = values.Msg
	}

	public Error(): string {
		const e = this;
		return $.concatString("asn1: syntax error: ", e.Msg)
	}

	static __typeInfo = $.registerStructType(
		"asn1.SyntaxError",
		() => new SyntaxError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		SyntaxError,
		() => [/* @__PURE__ */ $.structField("Msg", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class BitString {
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

	public clone(): BitString {
		return new BitString(this, true)
	}

	public __goscriptAssign(source: BitString): void {
		const target = this._fields
		const values = source._fields
		target.Bytes = values.Bytes
		target.BitLength = values.BitLength
	}

	public At(i: number): number {
		const b = this;
		if ((i < 0) || (i >= b.BitLength)) {
			return 0
		}
		let x = globalThis.Math.trunc(i / 8)
		let y = $.uint($.uint64Sub(7n, $.uint(i % 8, 64)), 64)
		return $.int($.uintShr($.arrayIndex(b.Bytes!, x), y, 8)) & 1
	}

	public RightAlign(): $.Slice<number> {
		const b = this;
		let shift = $.uint(8 - (b.BitLength % 8), 64)
		if ((shift == 8) || ($.sliceLen(b.Bytes) == 0)) {
			return b.Bytes
		}

		let a: $.Slice<number> = $.makeSlice<number>($.sliceLen(b.Bytes), undefined, "byte")
		$.sliceElems(a!)[$.sliceSlot(a!, 0)] = $.uint($.uintShr($.arrayIndex(b.Bytes!, 0), shift, 8), 8)
		for (let __goscriptSliceWindow2 = $.sliceRange(a), i = 1; i < $.sliceLen(b.Bytes); i++) {
			;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = $.uint((($.arrayIndex(b.Bytes!, i - 1) << ($.uint($.uint64Sub(8n, shift), 64))) & 0xff), 8);
			;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = (__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] | ($.uint($.uintShr($.arrayIndex(b.Bytes!, i), shift, 8), 8))
		}

		return a
	}

	static __typeInfo = $.registerStructType(
		"asn1.BitString",
		() => new BitString(),
		() => [$.methodSignature("At", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("RightAlign", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		BitString,
		() => [/* @__PURE__ */ $.structField("Bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("BitLength", /* @__PURE__ */ $.basicType("int"), [1], 24, true)]
	)
}

export class RawValue {
	public get Class(): number {
		return this._fields.Class
	}

	public set Class(value: number) {
		this._fields.Class = value
	}

	public get Tag(): number {
		return this._fields.Tag
	}

	public set Tag(value: number) {
		this._fields.Tag = value
	}

	public get IsCompound(): boolean {
		return this._fields.IsCompound
	}

	public set IsCompound(value: boolean) {
		this._fields.IsCompound = value
	}

	public get Bytes(): $.Slice<number> {
		return this._fields.Bytes
	}

	public set Bytes(value: $.Slice<number>) {
		this._fields.Bytes = value
	}

	public get FullBytes(): $.Slice<number> {
		return this._fields.FullBytes
	}

	public set FullBytes(value: $.Slice<number>) {
		this._fields.FullBytes = value
	}

	public _fields: {
		Class: number
		Tag: number
		IsCompound: boolean
		Bytes: $.Slice<number>
		FullBytes: $.Slice<number>
	}

	constructor(init?: Partial<{Class?: number, Tag?: number, IsCompound?: boolean, Bytes?: $.Slice<number>, FullBytes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Class: init?.Class ?? (0 as number),
			Tag: init?.Tag ?? (0 as number),
			IsCompound: init?.IsCompound ?? (false as boolean),
			Bytes: init?.Bytes ?? (null! as $.Slice<number>),
			FullBytes: init?.FullBytes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RawValue {
		return new RawValue(this, true)
	}

	public __goscriptAssign(source: RawValue): void {
		const target = this._fields
		const values = source._fields
		target.Class = values.Class
		target.Tag = values.Tag
		target.IsCompound = values.IsCompound
		target.Bytes = values.Bytes
		target.FullBytes = values.FullBytes
	}

	static __typeInfo = $.registerStructType(
		"asn1.RawValue",
		() => new RawValue(),
		() => [],
		RawValue,
		() => [/* @__PURE__ */ $.structField("Class", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("IsCompound", /* @__PURE__ */ $.basicType("bool"), [2], 16, true), /* @__PURE__ */ $.structField("Bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true), /* @__PURE__ */ $.structField("FullBytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 48, true)]
	)
}

export class invalidUnmarshalError {
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Type: reflect.Type | null
	}

	constructor(init?: Partial<{Type?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invalidUnmarshalError {
		return new invalidUnmarshalError(this, true)
	}

	public __goscriptAssign(source: invalidUnmarshalError): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
	}

	public async Error(): globalThis.Promise<string> {
		const e: invalidUnmarshalError | $.VarRef<invalidUnmarshalError> | null = this;
		const e$: invalidUnmarshalError = e == null ? $.pointerTarget<invalidUnmarshalError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<invalidUnmarshalError>(e)
		if ((e$ as invalidUnmarshalError).Type == null) {
			return "asn1: Unmarshal recipient value is nil"
		}

		if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((e$ as invalidUnmarshalError).Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return $.concatString("asn1: Unmarshal recipient value is non-pointer ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((e$ as invalidUnmarshalError).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return $.concatString("asn1: Unmarshal recipient value is nil ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((e$ as invalidUnmarshalError).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"asn1.invalidUnmarshalError",
		() => new invalidUnmarshalError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		invalidUnmarshalError,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true)]
	)
}

export const allowAsterisk: asteriskFlag = true

export const rejectAsterisk: asteriskFlag = false

export const allowAmpersand: ampersandFlag = true

export const rejectAmpersand: ampersandFlag = false

export function parseBool(bytes: $.Slice<number>): [boolean, $.GoError] {
	let ret: boolean = false
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(bytes) != 1) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "invalid boolean"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [ret, err]
	}

	// DER demands that "If the encoding represents the boolean value TRUE,
	// its single contents octet shall have all eight bits set to one."
	// Thus only 0 and 255 are valid encoded values.
	switch ($.arrayIndex(bytes!, 0)) {
		case 0:
		{
			ret = false
			break
		}
		case 0xff:
		{
			ret = true
			break
		}
		default:
		{
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "invalid boolean"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			break
		}
	}

	return [ret, err]
}

export function checkInteger(bytes: $.Slice<number>): $.GoError {
	if ($.sliceLen(bytes) == 0) {
		return $.interfaceValue<$.GoError>(new StructuralError({Msg: "empty integer"}, true), "asn1.StructuralError", "asn1.StructuralError")
	}
	if ($.sliceLen(bytes) == 1) {
		return null
	}
	if ((($.arrayIndex(bytes!, 0) == 0) && ($.uint(($.arrayIndex(bytes!, 1) & 0x80), 8) == 0)) || (($.arrayIndex(bytes!, 0) == 0xff) && ($.uint(($.arrayIndex(bytes!, 1) & 0x80), 8) == 0x80))) {
		return $.interfaceValue<$.GoError>(new StructuralError({Msg: "integer not minimally-encoded"}, true), "asn1.StructuralError", "asn1.StructuralError")
	}
	return null
}

export function parseInt64(bytes: $.Slice<number>): [bigint, $.GoError] {
	let ret: bigint = 0n
	let err: $.GoError = null! as $.GoError
	err = checkInteger(bytes)
	if (err != null) {
		return [ret, err]
	}
	if ($.sliceLen(bytes) > 8) {
		// We'll overflow an int64 in this case.
		err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "integer too large"}, true), "asn1.StructuralError", "asn1.StructuralError")
		return [ret, err]
	}
	for (let __goscriptSliceWindow0 = $.sliceRange(bytes), bytesRead = 0; bytesRead < __goscriptSliceWindow0.length; bytesRead++) {
		ret = $.int64Shl(ret, 8n)
		ret = $.int64Or(ret, $.int64(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, bytesRead)] as number)))
	}

	// Shift up and down in order to sign extend the result.
	ret = $.int64Shl(ret, $.int64(((64 - ($.uint($.sliceLen(bytes), 8) * 8)) & 0xff)))
	ret = $.int64Shr(ret, $.int64(((64 - ($.uint($.sliceLen(bytes), 8) * 8)) & 0xff)))
	return [ret, err]
}

export function parseInt32(bytes: $.Slice<number>): [number, $.GoError] {
	{
		let err = checkInteger(bytes)
		if (err != null) {
			return [0, err]
		}
	}
	let [ret64, err] = parseInt64(bytes)
	if (err != null) {
		return [0, err]
	}
	if (ret64 != $.int64($.int(ret64, 32))) {
		return [0, $.interfaceValue<$.GoError>(new StructuralError({Msg: "integer too large"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}
	return [$.int(ret64, 32), null]
}

export let bigOne: big.Int | $.VarRef<big.Int> | null = await big.NewInt(1n)

export function __goscript_set_bigOne(__goscriptValue: big.Int | $.VarRef<big.Int> | null): void {
	bigOne = __goscriptValue
}

export function parseBigInt(bytes: $.Slice<number>): [big.Int | $.VarRef<big.Int> | null, $.GoError] {
	{
		let err = checkInteger(bytes)
		if (err != null) {
			return [null, err]
		}
	}
	let ret: big.Int | $.VarRef<big.Int> | null = new big.Int()
	if (($.sliceLen(bytes) > 0) && ($.uint(($.arrayIndex(bytes!, 0) & 0x80), 8) == 0x80)) {
		// This is a negative number.
		let notBytes: $.Slice<number> = $.makeSlice<number>($.sliceLen(bytes), undefined, "byte")
		for (let __goscriptRangeTarget0 = notBytes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow1 = $.sliceRange(bytes), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.uint($.uint(~((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number), 8), 8)
		}
		void (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as big.Int).SetBytes(notBytes) : big.Int.prototype.SetBytes.call(ret, notBytes))
		void (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as big.Int).Add(ret, bigOne) : big.Int.prototype.Add.call(ret, ret, bigOne))
		void (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as big.Int).Neg(ret) : big.Int.prototype.Neg.call(ret, ret))
		return [ret, null]
	}
	void (ret !== null && (ret as any).__isVarRef !== true && (ret as any).__goValue === undefined ? ((ret as any) as big.Int).SetBytes(bytes) : big.Int.prototype.SetBytes.call(ret, bytes))
	return [ret, null]
}

export function parseBitString(bytes: $.Slice<number>): [BitString, $.GoError] {
	let ret: BitString = new BitString(undefined, true)
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(bytes) == 0) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "zero length BIT STRING"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [ret, err]
	}
	let paddingBits = $.int($.arrayIndex(bytes!, 0))
	if (((paddingBits > 7) || (($.sliceLen(bytes) == 1) && (paddingBits > 0))) || ($.uint(($.arrayIndex(bytes!, $.sliceLen(bytes) - 1) & ((((((1 << $.arrayIndex(bytes!, 0)) & 0xff)) - 1) & 0xff))), 8) != 0)) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "invalid padding bits in BIT STRING"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [ret, err]
	}
	ret.BitLength = (($.sliceLen(bytes) - 1) * 8) - paddingBits
	ret.Bytes = $.goSlice(bytes, 1, undefined)
	return [ret, err]
}

export var NullRawValue: RawValue

export function __goscript_init_NullRawValue(): void {
	if (((NullRawValue) as any) === undefined) {
		NullRawValue = new RawValue({Tag: 5}, true)
	}
}

export function __goscript_get_NullRawValue(): RawValue {
	if (((NullRawValue) as any) === undefined) {
		__goscript_init_NullRawValue()
	}
	return NullRawValue
}

export function __goscript_set_NullRawValue(__goscriptValue: RawValue): void {
	$.assignStruct(NullRawValue, __goscriptValue)
}

export var NullBytes: $.Slice<number>

export function __goscript_init_NullBytes(): void {
	if (((NullBytes) as any) === undefined) {
		NullBytes = new Uint8Array([5, 0]) as $.Slice<number>
	}
}

export function __goscript_get_NullBytes(): $.Slice<number> {
	if (((NullBytes) as any) === undefined) {
		__goscript_init_NullBytes()
	}
	return NullBytes
}

export function __goscript_set_NullBytes(__goscriptValue: $.Slice<number>): void {
	NullBytes = __goscriptValue
}

export function ObjectIdentifier_Equal(oi: ObjectIdentifier, other: ObjectIdentifier): boolean {
	return slices.Equal((oi as ObjectIdentifier), (other as ObjectIdentifier))
}

export function ObjectIdentifier_String(oi: ObjectIdentifier): string {
	let s: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	s.value.Grow(32)

	let buf: $.Slice<number> = $.makeSlice<number>(0, 19, "byte")
	for (let __goscriptRangeTarget1 = oi, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number)
		if (i > 0) {
			s.value.WriteByte(46)
		}
		s.value.Write(strconv.AppendInt(buf, $.int64(v), 10))
	}

	return s.value.String()
}

export function parseObjectIdentifier(bytes: $.Slice<number>): [ObjectIdentifier, $.GoError] {
	let s: ObjectIdentifier = null! as ObjectIdentifier
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(bytes) == 0) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "zero length OBJECT IDENTIFIER"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [s, err]
	}

	// In the worst case, we get two elements from the first byte (which is
	// encoded differently) and then every varint is a single byte long.
	s = ($.makeSlice<number>($.sliceLen(bytes) + 1, undefined, "number") as ObjectIdentifier)

	// The first varint is 40*value1 + value2:
	// According to this packing, value1 can take the values 0, 1 and 2 only.
	// When value1 = 0 or value1 = 1, then value2 is <= 39. When value1 = 2,
	// then there are no restrictions on value2.
	let __goscriptTuple0: any = parseBase128Int(bytes, 0)
	let v = __goscriptTuple0[0]
	let offset = __goscriptTuple0[1]
	err = __goscriptTuple0[2]
	if (err != null) {
		return [s, err]
	}
	if (v < 80) {
		$.sliceElems(s!)[$.sliceSlot(s!, 0)] = globalThis.Math.trunc(v / 40)
		$.sliceElems(s!)[$.sliceSlot(s!, 1)] = v % 40
	} else {
		$.sliceElems(s!)[$.sliceSlot(s!, 0)] = 2
		$.sliceElems(s!)[$.sliceSlot(s!, 1)] = v - 80
	}

	let i = 2
	for (let __goscriptSliceWindow3 = $.sliceRange(s); offset < $.sliceLen(bytes); i++) {
		let __goscriptTuple1: any = parseBase128Int(bytes, offset)
		v = __goscriptTuple1[0]
		offset = __goscriptTuple1[1]
		err = __goscriptTuple1[2]
		if (err != null) {
			return [s, err]
		}
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = v
	}
	s = ($.goSlice(s, 0, i) as ObjectIdentifier)
	return [s, err]
}

export function parseBase128Int(bytes: $.Slice<number>, initOffset: number): [number, number, $.GoError] {
	let ret: number = 0
	let offset: number = 0
	let err: $.GoError = null! as $.GoError
	offset = initOffset
	let ret64: bigint = 0n
	for (let __goscriptSliceWindow4 = $.sliceRange(bytes), shifted = 0; offset < __goscriptSliceWindow4.length; shifted++) {
		// 5 * 7 bits per byte == 35 bits of data
		// Thus the representation is either non-minimal or too large for an int32
		if (shifted == 5) {
			err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "base 128 integer too large"}, true), "asn1.StructuralError", "asn1.StructuralError")
			return [ret, offset, err]
		}
		ret64 = $.int64Shl(ret64, 7n)
		let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, offset)] as number)
		// integers should be minimally encoded, so the leading octet should
		// never be 0x80
		if ((shifted == 0) && (b == 0x80)) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "integer is not minimally encoded"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, offset, err]
		}
		ret64 = $.int64Or(ret64, $.int64(b & 0x7f))
		offset++
		if ($.uint((b & 0x80), 8) == 0) {
			ret = $.int(ret64)
			// Ensure that the returned value fits in an int on all platforms
			if (ret64 > 2147483647n) {
				err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "base 128 integer too large"}, true), "asn1.StructuralError", "asn1.StructuralError")
			}
			return [ret, offset, err]
		}
	}
	err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "truncated base 128 integer"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
	return [ret, offset, err]
}

export function parseUTCTime(bytes: $.Slice<number>): [time.Time, $.GoError] {
	let ret: time.Time = $.markAsStructValue(new time.Time())
	let err: $.GoError = null! as $.GoError
	let s = $.bytesToString(bytes)

	let formatStr = "0601021504Z0700"
	let __goscriptTuple2: any = time.Parse(formatStr, s)
	ret = $.assignStruct(ret, __goscriptTuple2[0])
	err = __goscriptTuple2[1]
	if (err != null) {
		formatStr = "060102150405Z0700"
		let __goscriptTuple3: any = time.Parse(formatStr, s)
		ret = $.assignStruct(ret, __goscriptTuple3[0])
		err = __goscriptTuple3[1]
	}
	if (err != null) {
		return [ret, err]
	}

	{
		let serialized = $.markAsStructValue($.cloneStructValue(ret)).Format(formatStr)
		if (!$.stringEqual(serialized, s)) {
			err = fmt.Errorf("asn1: time did not serialize back to the original value and may be invalid: given %q, but serialized as %q", s, serialized)
			return [ret, err]
		}
	}

	if ($.markAsStructValue($.cloneStructValue(ret)).Year() >= 2050) {
		// UTCTime only encodes times prior to 2050. See https://tools.ietf.org/html/rfc5280#section-4.1.2.5.1
		ret = $.assignStruct(ret, $.markAsStructValue($.cloneStructValue(ret)).AddDate(-100, 0, 0))
	}

	return [ret, err]
}

export function parseGeneralizedTime(bytes: $.Slice<number>): [time.Time, $.GoError] {
	let ret: time.Time = $.markAsStructValue(new time.Time())
	let err: $.GoError = null! as $.GoError
	const formatStr: string = "20060102150405.999999999Z0700"
	let s = $.bytesToString(bytes)

	{
		let __goscriptTuple4: any = time.Parse("20060102150405.999999999Z0700", s)
		ret = $.assignStruct(ret, __goscriptTuple4[0])
		err = __goscriptTuple4[1]
		if (err != null) {
			return [ret, err]
		}
	}

	{
		let serialized = $.markAsStructValue($.cloneStructValue(ret)).Format("20060102150405.999999999Z0700")
		if (!$.stringEqual(serialized, s)) {
			err = fmt.Errorf("asn1: time did not serialize back to the original value and may be invalid: given %q, but serialized as %q", s, serialized)
		}
	}

	return [ret, err]
}

export function parseNumericString(bytes: $.Slice<number>): [string, $.GoError] {
	let ret: string = ""
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget2 = bytes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 8)
		if (!isNumeric(b)) {
			return ["", $.interfaceValue<$.GoError>(new SyntaxError({Msg: "NumericString contains invalid character"}, true), "asn1.SyntaxError", "asn1.SyntaxError")]
		}
	}
	return [$.bytesToString(bytes), null]
}

export function isNumeric(b: number): boolean {
	return ((48 <= b) && (b <= 57)) || (b == 32)
}

export function parsePrintableString(bytes: $.Slice<number>): [string, $.GoError] {
	let ret: string = ""
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget3 = bytes, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 8)
		if (!isPrintable(b, true, true)) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "PrintableString contains invalid character"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, err]
		}
	}
	ret = $.bytesToString(bytes)
	return [ret, err]
}

export function isPrintable(b: number, asterisk: asteriskFlag, ampersand: ampersandFlag): boolean {
	return (((((((((((97 <= b) && (b <= 122)) || ((65 <= b) && (b <= 90))) || ((48 <= b) && (b <= 57))) || ((39 <= b) && (b <= 41))) || ((43 <= b) && (b <= 47))) || (b == 32)) || (b == 58)) || (b == 61)) || (b == 63)) || (asterisk && (b == 42))) || (ampersand && (b == 38))
}

export function parseIA5String(bytes: $.Slice<number>): [string, $.GoError] {
	let ret: string = ""
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget4 = bytes, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number), 8)
		if (b >= 128) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "IA5String contains invalid character"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, err]
		}
	}
	ret = $.bytesToString(bytes)
	return [ret, err]
}

export function parseT61String(bytes: $.Slice<number>): [string, $.GoError] {
	let ret: string = ""
	let err: $.GoError = null! as $.GoError
	// T.61 is a defunct ITU 8-bit character encoding which preceded Unicode.
	// T.61 uses a code page layout that _almost_ exactly maps to the code
	// page layout of the ISO 8859-1 (Latin-1) character encoding, with the
	// exception that a number of characters in Latin-1 are not present
	// in T.61.
	//
	// Instead of mapping which characters are present in Latin-1 but not T.61,
	// we just treat these strings as being encoded using Latin-1. This matches
	// what most of the world does, including BoringSSL.
	let buf: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(bytes), "byte")
	for (let __goscriptRangeTarget5 = bytes, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as number), 8)
		// All the 1-byte UTF-8 runes map 1-1 with Latin-1.
		buf = utf8.AppendRune(buf, $.int(v, 32))
	}
	return [$.bytesToString(buf), null]
}

export function parseUTF8String(bytes: $.Slice<number>): [string, $.GoError] {
	let ret: string = ""
	let err: $.GoError = null! as $.GoError
	if (!utf8.Valid(bytes)) {
		return ["", errors.New("asn1: invalid UTF-8 string")]
	}
	return [$.bytesToString(bytes), null]
}

export function parseBMPString(bmpString: $.Slice<number>): [string, $.GoError] {
	// BMPString uses the defunct UCS-2 16-bit character encoding, which
	// covers the Basic Multilingual Plane (BMP). UTF-16 was an extension of
	// UCS-2, containing all of the same code points, but also including
	// multi-code point characters (by using surrogate code points). We can
	// treat a UCS-2 encoded string as a UTF-16 encoded string, as long as
	// we reject out the UTF-16 specific code points. This matches the
	// BoringSSL behavior.

	if (($.sliceLen(bmpString) % 2) != 0) {
		return ["", errors.New("invalid BMPString")]
	}

	// Strip terminator if present.
	{
		let l: number = $.sliceLen(bmpString)
		if (((l >= 2) && ($.arrayIndex(bmpString!, l - 1) == 0)) && ($.arrayIndex(bmpString!, l - 2) == 0)) {
			bmpString = $.goSlice(bmpString, undefined, l - 2)
		}
	}

	let s: $.Slice<number> = $.makeSlice<number>(0, globalThis.Math.trunc($.sliceLen(bmpString) / 2), "number")
	while ($.sliceLen(bmpString) > 0) {
		let point = $.uint(((((($.uint($.arrayIndex(bmpString!, 0), 16) << 8) & 0xffff)) + $.uint($.arrayIndex(bmpString!, 1), 16)) & 0xffff), 16)
		// Reject UTF-16 code points that are permanently reserved
		// noncharacters (0xfffe, 0xffff, and 0xfdd0-0xfdef) and surrogates
		// (0xd800-0xdfff).
		if ((((point == 0xfffe) || (point == 0xffff)) || ((point >= 0xfdd0) && (point <= 0xfdef))) || ((point >= 0xd800) && (point <= 0xdfff))) {
			return ["", errors.New("invalid BMPString")]
		}
		s = $.appendOne(s, $.uint(point, 16))
		bmpString = $.goSlice(bmpString, 2, undefined)
	}

	return [$.runesToString(utf16.Decode(s)), null]
}

export function parseTagAndLength(bytes: $.Slice<number>, initOffset: number): [__goscript_common.tagAndLength, number, $.GoError] {
	let ret: __goscript_common.tagAndLength = new __goscript_common.tagAndLength(undefined, true)
	let offset: number = 0
	let err: $.GoError = null! as $.GoError
	offset = initOffset
	// parseTagAndLength should not be called without at least a single
	// byte to read. Thus this check is for robustness:
	if (offset >= $.sliceLen(bytes)) {
		err = errors.New("asn1: internal error in parseTagAndLength")
		return [ret, offset, err]
	}
	let b = $.arrayIndex(bytes!, offset)
	offset++
	ret._class = $.int($.uintShr(b, 6, 8))
	ret.isCompound = $.uint((b & 0x20), 8) == 0x20
	ret.tag = $.int(b & 0x1f)

	// If the bottom five bits are set, then the tag number is actually base 128
	// encoded afterwards
	if (ret.tag == 0x1f) {
		let __goscriptTuple5: any = parseBase128Int(bytes, offset)
		ret.tag = __goscriptTuple5[0]
		offset = __goscriptTuple5[1]
		err = __goscriptTuple5[2]
		if (err != null) {
			return [ret, offset, err]
		}
		// Tags should be encoded in minimal form.
		if (ret.tag < 0x1f) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "non-minimal tag"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, offset, err]
		}
	}
	if (offset >= $.sliceLen(bytes)) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "truncated tag or length"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [ret, offset, err]
	}
	b = $.arrayIndex(bytes!, offset)
	offset++
	if ($.uint((b & 0x80), 8) == 0) {
		// The length is encoded in the bottom 7 bits.
		ret.length = $.int(b & 0x7f)
	} else {
		// Bottom 7 bits give the number of length bytes to follow.
		let numBytes = $.int(b & 0x7f)
		if (numBytes == 0) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "indefinite length found (not DER)"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, offset, err]
		}
		ret.length = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(bytes), i = 0; i < numBytes; i++) {
			if (offset >= __goscriptSliceWindow5.length) {
				err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "truncated tag or length"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
				return [ret, offset, err]
			}
			b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, offset)] as number)
			offset++
			if (ret.length >= 8388608) {
				// We can't shift ret.length up without
				// overflowing.
				err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "length too large"}, true), "asn1.StructuralError", "asn1.StructuralError")
				return [ret, offset, err]
			}
			ret.length = ret.length << (8)
			ret.length = ret.length | ($.int(b))
			if (ret.length == 0) {
				// DER requires that lengths be minimal.
				err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "superfluous leading zeros in length"}, true), "asn1.StructuralError", "asn1.StructuralError")
				return [ret, offset, err]
			}
		}
		// Short lengths must be encoded in short form.
		if (ret.length < 0x80) {
			err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "non-minimal length"}, true), "asn1.StructuralError", "asn1.StructuralError")
			return [ret, offset, err]
		}
	}

	return [ret, offset, err]
}

export async function parseSequenceOf(bytes: $.Slice<number>, sliceType: reflect.Type | null, elemType: reflect.Type | null, depth: number): globalThis.Promise<[reflect.Value, $.GoError]> {
	let ret: reflect.Value = $.markAsStructValue(new reflect.Value())
	let err: $.GoError = null! as $.GoError
	let [matchAny, expectedTag, compoundType, ok] = await __goscript_common.getUniversalType(elemType)
	if (!ok) {
		err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "unknown Go type for slice"}, true), "asn1.StructuralError", "asn1.StructuralError")
		return [ret, err]
	}

	// First we iterate over the input and count the number of elements,
	// checking that the types are correct in each case.
	let numElements = 0
	for (let offset = 0; offset < $.sliceLen(bytes); ) {
		let t: __goscript_common.tagAndLength = new __goscript_common.tagAndLength(undefined, true)
		let __goscriptTuple6: any = parseTagAndLength(bytes, offset)
		t = $.assignStruct(t, __goscriptTuple6[0])
		offset = __goscriptTuple6[1]
		err = __goscriptTuple6[2]
		if (err != null) {
			return [ret, err]
		}
		switch (t.tag) {
			case 22:
			case 27:
			case 20:
			case 12:
			case 18:
			case 30:
			{
				t.tag = 19
				break
			}
			case 24:
			case 23:
			{
				t.tag = 23
				break
			}
		}

		if (!matchAny && (((t._class != 0) || (t.isCompound != compoundType)) || (t.tag != expectedTag))) {
			err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "sequence tag mismatch"}, true), "asn1.StructuralError", "asn1.StructuralError")
			return [ret, err]
		}
		if (invalidLength(offset, t.length, $.sliceLen(bytes))) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "truncated sequence"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
			return [ret, err]
		}
		offset = offset + (t.length)
		numElements++
	}
	let elemSize = $.uint64((__goscriptAwait = (elemType !== null && (elemType as any).__isVarRef !== true && (elemType as any).__goValue === undefined ? (elemType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(elemType)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let safeCap = saferio.SliceCapWithSize(elemSize, $.uint64(numElements))
	if (safeCap < 0) {
		err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("%s slice too big: %d elements of %d bytes", $.namedValueInterfaceValue<any>((__goscriptAwait = (elemType !== null && (elemType as any).__isVarRef !== true && (elemType as any).__goValue === undefined ? (elemType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(elemType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(numElements, "int"), $.basicInterfaceValue(elemSize, "uint64")); return new SyntaxError({Msg: __goscriptLiteralField0}, true) })()), "asn1.SyntaxError", "asn1.SyntaxError")
		return [ret, err]
	}
	ret = $.assignStruct(ret, reflect.MakeSlice($.pointerValueOrNil(sliceType)!, 0, safeCap))
	let params = new __goscript_common.fieldParameters(undefined, true)
	let offset = 0
	for (let i = 0; i < numElements; i++) {
		ret = $.assignStruct(ret, reflect.Append($.markAsStructValue($.cloneStructValue(ret)), $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(elemType)!)))))
		let __goscriptTuple7: any = await parseField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ret)).Index(i))), bytes, offset, params, depth)
		offset = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [ret, err]
		}
	}
	return [ret, err]
}

export let bitStringType: reflect.Type | null = reflect.TypeFor(__goscriptStatic3())

export function __goscript_set_bitStringType(__goscriptValue: reflect.Type | null): void {
	bitStringType = __goscriptValue
}

export let objectIdentifierType: reflect.Type | null = reflect.TypeFor(__goscriptStatic4())

export function __goscript_set_objectIdentifierType(__goscriptValue: reflect.Type | null): void {
	objectIdentifierType = __goscriptValue
}

export let enumeratedType: reflect.Type | null = reflect.TypeFor(__goscriptStatic5())

export function __goscript_set_enumeratedType(__goscriptValue: reflect.Type | null): void {
	enumeratedType = __goscriptValue
}

export let flagType: reflect.Type | null = reflect.TypeFor(__goscriptStatic6())

export function __goscript_set_flagType(__goscriptValue: reflect.Type | null): void {
	flagType = __goscriptValue
}

export let timeType: reflect.Type | null = reflect.TypeFor(__goscriptStatic7())

export function __goscript_set_timeType(__goscriptValue: reflect.Type | null): void {
	timeType = __goscriptValue
}

export let rawValueType: reflect.Type | null = reflect.TypeFor(__goscriptStatic8())

export function __goscript_set_rawValueType(__goscriptValue: reflect.Type | null): void {
	rawValueType = __goscriptValue
}

export let rawContentsType: reflect.Type | null = reflect.TypeFor(__goscriptStatic9())

export function __goscript_set_rawContentsType(__goscriptValue: reflect.Type | null): void {
	rawContentsType = __goscriptValue
}

export let bigIntType: reflect.Type | null = reflect.TypeFor(__goscriptStatic10())

export function __goscript_set_bigIntType(__goscriptValue: reflect.Type | null): void {
	bigIntType = __goscriptValue
}

export function invalidLength(offset: number, length: number, sliceLength: number): boolean {
	return ((offset + length) < offset) || ((offset + length) > sliceLength)
}

export async function parseField(v: reflect.Value, bytes: $.Slice<number>, initOffset: number, params: __goscript_common.fieldParameters, depth: number): globalThis.Promise<[number, $.GoError]> {
	let offset: number = 0
	let err: $.GoError = null! as $.GoError
	depth++
	const maxDecodeDepth: number = 10000
	const maxDecodeDepthWasm: number = 5000
	if ((depth > 10000) || (($.stringEqual(runtime.GOARCH, "wasm")) && (depth > 5000))) {
		return [initOffset, $.interfaceValue<$.GoError>(new StructuralError({Msg: "nesting depth exceeded"}, true), "asn1.StructuralError", "asn1.StructuralError")]
	}
	offset = initOffset
	let fieldType = $.markAsStructValue($.cloneStructValue(v)).Type()

	// If we have run out of data, it may be that there are optional elements at the end.
	if (offset == $.sliceLen(bytes)) {
		if (!setDefaultValue(v, params)) {
			err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "sequence truncated"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		}
		return [offset, err]
	}

	// Deal with the ANY type.
	{
		let ifaceType: reflect.Type | null = fieldType
		if (((__goscriptAwait = (ifaceType !== null && (ifaceType as any).__isVarRef !== true && (ifaceType as any).__goValue === undefined ? (ifaceType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ifaceType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 20) && ((__goscriptAwait = (ifaceType !== null && (ifaceType as any).__isVarRef !== true && (ifaceType as any).__goValue === undefined ? (ifaceType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ifaceType)).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
			let t: __goscript_common.tagAndLength = new __goscript_common.tagAndLength(undefined, true)
			let __goscriptTuple8: any = parseTagAndLength(bytes, offset)
			t = $.assignStruct(t, __goscriptTuple8[0])
			offset = __goscriptTuple8[1]
			err = __goscriptTuple8[2]
			if (err != null) {
				return [offset, err]
			}
			if (invalidLength(offset, t.length, $.sliceLen(bytes))) {
				err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "data truncated"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
				return [offset, err]
			}
			let result: any = null! as any
			if (!t.isCompound && (t._class == 0)) {
				let innerBytes: $.Slice<number> = $.goSlice(bytes, offset, offset + t.length)
				switch (t.tag) {
					case 1:
					{
						let __goscriptTuple9: any = parseBool(innerBytes)
						result = __goscriptTuple9[0]
						err = __goscriptTuple9[1]
						break
					}
					case 19:
					{
						let __goscriptTuple10: any = parsePrintableString(innerBytes)
						result = __goscriptTuple10[0]
						err = __goscriptTuple10[1]
						break
					}
					case 18:
					{
						let __goscriptTuple11: any = parseNumericString(innerBytes)
						result = __goscriptTuple11[0]
						err = __goscriptTuple11[1]
						break
					}
					case 22:
					{
						let __goscriptTuple12: any = parseIA5String(innerBytes)
						result = __goscriptTuple12[0]
						err = __goscriptTuple12[1]
						break
					}
					case 20:
					{
						let __goscriptTuple13: any = parseT61String(innerBytes)
						result = __goscriptTuple13[0]
						err = __goscriptTuple13[1]
						break
					}
					case 12:
					{
						let __goscriptTuple14: any = parseUTF8String(innerBytes)
						result = __goscriptTuple14[0]
						err = __goscriptTuple14[1]
						break
					}
					case 2:
					{
						let __goscriptTuple15: any = parseInt64(innerBytes)
						result = $.basicInterfaceValue(__goscriptTuple15[0], "int64")
						err = __goscriptTuple15[1]
						break
					}
					case 3:
					{
						let __goscriptTuple16: any = parseBitString(innerBytes)
						result = $.interfaceValue(__goscriptTuple16[0], "asn1.BitString", "asn1.BitString")
						err = __goscriptTuple16[1]
						break
					}
					case 6:
					{
						let __goscriptTuple17: any = parseObjectIdentifier(innerBytes)
						result = $.namedValueInterfaceValue<any>(__goscriptTuple17[0], "asn1.ObjectIdentifier", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic13())
						err = __goscriptTuple17[1]
						break
					}
					case 23:
					{
						let __goscriptTuple18: any = parseUTCTime(innerBytes)
						result = $.interfaceValue(__goscriptTuple18[0], "time.Time", "time.Time")
						err = __goscriptTuple18[1]
						break
					}
					case 24:
					{
						let __goscriptTuple19: any = parseGeneralizedTime(innerBytes)
						result = $.interfaceValue(__goscriptTuple19[0], "time.Time", "time.Time")
						err = __goscriptTuple19[1]
						break
					}
					case 4:
					{
						result = $.interfaceValue(innerBytes, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
						break
					}
					case 30:
					{
						let __goscriptTuple20: any = parseBMPString(innerBytes)
						result = __goscriptTuple20[0]
						err = __goscriptTuple20[1]
						break
					}
					default:
					{
						break
					}
				}
			}
			offset = offset + (t.length)
			if (err != null) {
				return [offset, err]
			}
			if (result != null) {
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(result))))
			}
			return [offset, err]
		}
	}

	let __goscriptTuple21: any = parseTagAndLength(bytes, offset)
	let t = __goscriptTuple21[0]
	offset = __goscriptTuple21[1]
	err = __goscriptTuple21[2]
	if (err != null) {
		return [offset, err]
	}
	if (params.explicit) {
		let expectedClass = 2
		if (params.application) {
			expectedClass = 1
		}
		if (offset == $.sliceLen(bytes)) {
			err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "explicit tag has no child"}, true), "asn1.StructuralError", "asn1.StructuralError")
			return [offset, err]
		}
		if (((t._class == expectedClass) && (t.tag == $.pointerValue<number>(params.tag))) && ((t.length == 0) || t.isCompound)) {
			if ($.comparableEqual(fieldType, rawValueType)) {
			} else {
				if (t.length > 0) {
					let __goscriptTuple22: any = parseTagAndLength(bytes, offset)
					t = $.assignStruct(t, __goscriptTuple22[0])
					offset = __goscriptTuple22[1]
					err = __goscriptTuple22[2]
					if (err != null) {
						return [offset, err]
					}
				} else {
					if (!$.comparableEqual(fieldType, flagType)) {
						err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "zero length explicit tag was not an asn1.Flag"}, true), "asn1.StructuralError", "asn1.StructuralError")
						return [offset, err]
					}
					$.markAsStructValue($.cloneStructValue(v)).SetBool(true)
					return [offset, err]
				}
			}
		} else {
			// The tags didn't match, it might be an optional element.
			let ok = setDefaultValue(v, params)
			if (ok) {
				offset = initOffset
			} else {
				err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "explicitly tagged member didn't match"}, true), "asn1.StructuralError", "asn1.StructuralError")
			}
			return [offset, err]
		}
	}

	let [matchAny, universalTag, compoundType, ok1] = await __goscript_common.getUniversalType(fieldType)
	if (!ok1) {
		err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf("unknown Go type: %v", (fieldType as any)); return new StructuralError({Msg: __goscriptLiteralField1}, true) })()), "asn1.StructuralError", "asn1.StructuralError")
		return [offset, err]
	}

	// Special case for strings: all the ASN.1 string types map to the Go
	// type string. getUniversalType returns the tag for PrintableString
	// when it sees a string, so if we see a different string type on the
	// wire, we change the universal type to match.
	if (universalTag == 19) {
		if (t._class == 0) {
			switch (t.tag) {
				case 22:
				case 27:
				case 20:
				case 12:
				case 18:
				case 30:
				{
					universalTag = t.tag
					break
				}
			}
		} else {
			if (params.stringType != 0) {
				universalTag = params.stringType
			}
		}
	}

	// Special case for time: UTCTime and GeneralizedTime both map to the
	// Go type time.Time. getUniversalType returns the tag for UTCTime when
	// it sees a time.Time, so if we see a different time type on the wire,
	// or the field is tagged with a different type, we change the universal
	// type to match.
	if (universalTag == 23) {
		if (t._class == 0) {
			if (t.tag == 24) {
				universalTag = t.tag
			}
		} else {
			if (params.timeType != 0) {
				universalTag = params.timeType
			}
		}
	}

	if (params._set) {
		universalTag = 17
	}

	let matchAnyClassAndTag = matchAny
	let expectedClass = 0
	let expectedTag = universalTag

	if (!params.explicit && (params.tag != null)) {
		expectedClass = 2
		expectedTag = $.pointerValue<number>(params.tag)
		matchAnyClassAndTag = false
	}

	if ((!params.explicit && params.application) && (params.tag != null)) {
		expectedClass = 1
		expectedTag = $.pointerValue<number>(params.tag)
		matchAnyClassAndTag = false
	}

	if ((!params.explicit && params._private) && (params.tag != null)) {
		expectedClass = 3
		expectedTag = $.pointerValue<number>(params.tag)
		matchAnyClassAndTag = false
	}

	// We have unwrapped any explicit tagging at this point.
	if ((!matchAnyClassAndTag && ((t._class != expectedClass) || (t.tag != expectedTag))) || (!matchAny && (t.isCompound != compoundType))) {
		// Tags don't match. Again, it could be an optional element.
		let ok = setDefaultValue(v, params)
		if (ok) {
			offset = initOffset
		} else {
			err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField2 = await fmt.Sprintf("tags don't match (%d vs %+v) %+v %s @%d", $.basicInterfaceValue(expectedTag, "int"), $.interfaceValue((t).clone(), "asn1.tagAndLength", "asn1.tagAndLength"), $.interfaceValue((params).clone(), "asn1.fieldParameters", "asn1.fieldParameters"), (__goscriptAwait = (fieldType !== null && (fieldType as any).__isVarRef !== true && (fieldType as any).__goValue === undefined ? (fieldType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fieldType)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.basicInterfaceValue(offset, "int")); return new StructuralError({Msg: __goscriptLiteralField2}, true) })()), "asn1.StructuralError", "asn1.StructuralError")
		}
		return [offset, err]
	}
	if (invalidLength(offset, t.length, $.sliceLen(bytes))) {
		err = $.interfaceValue<$.GoError>(new SyntaxError({Msg: "data truncated"}, true), "asn1.SyntaxError", "asn1.SyntaxError")
		return [offset, err]
	}
	let innerBytes: $.Slice<number> = $.goSlice(bytes, offset, offset + t.length)
	offset = offset + (t.length)

	// We deal with the structures defined in this package first.
	{
		const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Addr())).Interface()
		switch (true) {
			case $.typeAssert<RawValue | $.VarRef<RawValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("asn1.RawValue")).ok:
				{
					let v: RawValue | $.VarRef<RawValue> | null = $.typeAssert<RawValue | $.VarRef<RawValue> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("asn1.RawValue")).value
					$.assignStruct($.pointerValue<RawValue>(v), new RawValue({Class: t._class, Tag: t.tag, IsCompound: t.isCompound, Bytes: innerBytes, FullBytes: $.goSlice(bytes, initOffset, offset)}, true))
					return [offset, err]
				}
				break
			case $.typeAssert<$.VarRef<ObjectIdentifier> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))).ok:
				{
					let v: $.VarRef<ObjectIdentifier> | null = $.typeAssert<$.VarRef<ObjectIdentifier> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))).value
					let __goscriptTuple23: any = parseObjectIdentifier(innerBytes)
					v!.value = (__goscriptTuple23[0] as ObjectIdentifier)
					err = __goscriptTuple23[1]
					return [offset, err]
				}
				break
			case $.typeAssert<BitString | $.VarRef<BitString> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("asn1.BitString")).ok:
				{
					let v: BitString | $.VarRef<BitString> | null = $.typeAssert<BitString | $.VarRef<BitString> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("asn1.BitString")).value
					let __goscriptTuple24: any = parseBitString(innerBytes)
					$.assignStruct($.pointerValue<BitString>(v), __goscriptTuple24[0])
					err = __goscriptTuple24[1]
					return [offset, err]
				}
				break
			case $.typeAssert<time.Time | $.VarRef<time.Time> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("time.Time")).ok:
				{
					let v: time.Time | $.VarRef<time.Time> | null = $.typeAssert<time.Time | $.VarRef<time.Time> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("time.Time")).value
					if (universalTag == 23) {
						let __goscriptTuple25: any = parseUTCTime(innerBytes)
						$.assignStruct($.pointerValue<time.Time>(v), __goscriptTuple25[0])
						err = __goscriptTuple25[1]
						return [offset, err]
					}
					let __goscriptTuple26: any = parseGeneralizedTime(innerBytes)
					$.assignStruct($.pointerValue<time.Time>(v), __goscriptTuple26[0])
					err = __goscriptTuple26[1]
					return [offset, err]
				}
				break
			case $.typeAssert<$.VarRef<Enumerated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "asn1.Enumerated"))).ok:
				{
					let v: $.VarRef<Enumerated> | null = $.typeAssert<$.VarRef<Enumerated> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "asn1.Enumerated"))).value
					let [parsedInt, err1] = parseInt32(innerBytes)
					if (err1 == null) {
						v!.value = $.int(parsedInt)
					}
					err = err1
					return [offset, err]
				}
				break
			case $.typeAssert<$.VarRef<Flag> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool", "asn1.Flag"))).ok:
				{
					let v: $.VarRef<Flag> | null = $.typeAssert<$.VarRef<Flag> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool", "asn1.Flag"))).value
					v!.value = true
					return [offset, err]
				}
				break
			case $.typeAssert<$.VarRef<big.Int | $.VarRef<big.Int> | null> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("big.Int"))).ok:
				{
					let v: $.VarRef<big.Int | $.VarRef<big.Int> | null> | null = $.typeAssert<$.VarRef<big.Int | $.VarRef<big.Int> | null> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("big.Int"))).value
					let __goscriptTuple27: any = parseBigInt(innerBytes)
					let parsedInt: big.Int | $.VarRef<big.Int> | null = __goscriptTuple27[0]
					let err1 = __goscriptTuple27[1]
					if (err1 == null) {
						v!.value = parsedInt
					}
					err = err1
					return [offset, err]
				}
				break
		}
	}
	{
		let val = $.markAsStructValue($.cloneStructValue(v))
		switch ($.markAsStructValue($.cloneStructValue(val)).Kind()) {
			case reflect.Bool:
			{
				let [parsedBool, err1] = parseBool(innerBytes)
				if (err1 == null) {
					$.markAsStructValue($.cloneStructValue(val)).SetBool(parsedBool)
				}
				err = err1
				return [offset, err]
				break
			}
			case reflect.Int:
			case reflect.Int32:
			case reflect.Int64:
			{
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(val)).Type()).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 4) {
					let [parsedInt, err1] = parseInt32(innerBytes)
					if (err1 == null) {
						$.markAsStructValue($.cloneStructValue(val)).SetInt($.int64(parsedInt))
					}
					err = err1
				} else {
					let [parsedInt, err1] = parseInt64(innerBytes)
					if (err1 == null) {
						$.markAsStructValue($.cloneStructValue(val)).SetInt(parsedInt)
					}
					err = err1
				}
				return [offset, err]
				break
			}
			case reflect.Struct:
			{
				let structType: reflect.Type | null = fieldType

				for (let i = 0; i < (__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					if (!$.markAsStructValue($.cloneStructValue(((__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))).IsExported()) {
						err = $.interfaceValue<$.GoError>(new StructuralError({Msg: "struct contains unexported fields"}, true), "asn1.StructuralError", "asn1.StructuralError")
						return [offset, err]
					}
				}

				if (((__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) && ($.comparableEqual(((__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type, rawContentsType))) {
					let __goscriptShadow0 = bytes
					let __goscriptShadow1: $.Slice<number> = $.goSlice(__goscriptShadow0, initOffset, offset)
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(val)).Field(0))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue((__goscriptShadow1 as RawContent), "asn1.RawContent", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"))))))
				}

				let innerOffset = 0
				for (let i = 0; i < (__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
					if ((i == 0) && ($.comparableEqual(field.Type, rawContentsType))) {
						continue
					}
					let __goscriptTuple28: any = await parseField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(val)).Field(i))), innerBytes, innerOffset, __goscript_common.parseFieldParameters(reflect.StructTag_Get(field.Tag, "asn1")), depth)
					innerOffset = __goscriptTuple28[0]
					err = __goscriptTuple28[1]
					if (err != null) {
						return [offset, err]
					}
				}
				// We allow extra bytes at the end of the SEQUENCE because
				// adding elements to the end has been used in X.509 as the
				// version numbers have increased.
				return [offset, err]
				break
			}
			case reflect.Slice:
			{
				let sliceType: reflect.Type | null = fieldType
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (sliceType !== null && (sliceType as any).__isVarRef !== true && (sliceType as any).__goValue === undefined ? (sliceType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(sliceType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
					$.markAsStructValue($.cloneStructValue(val)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil(sliceType)!, $.sliceLen(innerBytes), $.sliceLen(innerBytes)))))
					reflect.Copy($.markAsStructValue($.cloneStructValue(val)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(innerBytes, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
					return [offset, err]
				}
				let [newSlice, err1] = await parseSequenceOf(innerBytes, sliceType, (__goscriptAwait = (sliceType !== null && (sliceType as any).__isVarRef !== true && (sliceType as any).__goValue === undefined ? (sliceType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(sliceType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), depth)
				if (err1 == null) {
					$.markAsStructValue($.cloneStructValue(val)).Set($.markAsStructValue($.cloneStructValue(newSlice)))
				}
				err = err1
				return [offset, err]
				break
			}
			case reflect.String:
			{
				let __goscriptShadow2: string = ""
				switch (universalTag) {
					case 19:
					{
						let __goscriptTuple29: any = parsePrintableString(innerBytes)
						__goscriptShadow2 = __goscriptTuple29[0]
						err = __goscriptTuple29[1]
						break
					}
					case 18:
					{
						let __goscriptTuple30: any = parseNumericString(innerBytes)
						__goscriptShadow2 = __goscriptTuple30[0]
						err = __goscriptTuple30[1]
						break
					}
					case 22:
					{
						let __goscriptTuple31: any = parseIA5String(innerBytes)
						__goscriptShadow2 = __goscriptTuple31[0]
						err = __goscriptTuple31[1]
						break
					}
					case 20:
					{
						let __goscriptTuple32: any = parseT61String(innerBytes)
						__goscriptShadow2 = __goscriptTuple32[0]
						err = __goscriptTuple32[1]
						break
					}
					case 12:
					{
						let __goscriptTuple33: any = parseUTF8String(innerBytes)
						__goscriptShadow2 = __goscriptTuple33[0]
						err = __goscriptTuple33[1]
						break
					}
					case 27:
					{
						let __goscriptTuple34: any = parseT61String(innerBytes)
						__goscriptShadow2 = __goscriptTuple34[0]
						err = __goscriptTuple34[1]
						break
					}
					case 30:
					{
						let __goscriptTuple35: any = parseBMPString(innerBytes)
						__goscriptShadow2 = __goscriptTuple35[0]
						err = __goscriptTuple35[1]
						break
					}
					default:
					{
						err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = await fmt.Sprintf("internal error: unknown string type %d", $.basicInterfaceValue(universalTag, "int")); return new SyntaxError({Msg: __goscriptLiteralField3}, true) })()), "asn1.SyntaxError", "asn1.SyntaxError")
						break
					}
				}
				if (err == null) {
					$.markAsStructValue($.cloneStructValue(val)).SetString(__goscriptShadow2)
				}
				return [offset, err]
				break
			}
		}
	}
	err = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField4 = $.concatString("unsupported: ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new StructuralError({Msg: __goscriptLiteralField4}, true) })()), "asn1.StructuralError", "asn1.StructuralError")
	return [offset, err]
}

export function canHaveDefaultValue(k: reflect.Kind): boolean {
	switch (k) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return true
			break
		}
	}

	return false
}

export function setDefaultValue(v: reflect.Value, params: __goscript_common.fieldParameters): boolean {
	let ok: boolean = false
	if (!params.optional) {
		return ok
	}
	ok = true
	if (params.defaultValue == null) {
		return ok
	}
	if (canHaveDefaultValue($.markAsStructValue($.cloneStructValue(v)).Kind())) {
		$.markAsStructValue($.cloneStructValue(v)).SetInt($.pointerValue<bigint>(params.defaultValue))
	}
	return ok
}

export async function Unmarshal(b: $.Slice<number>, val: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let rest: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	return UnmarshalWithParams(b, val, "")
}

export async function UnmarshalWithParams(b: $.Slice<number>, val: any, params: string): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let rest: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(val)))
	if (($.markAsStructValue($.cloneStructValue(v)).Kind() != 22) || $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = reflect.TypeOf(val); return new invalidUnmarshalError({Type: __goscriptLiteralField5}) })(), "*asn1.invalidUnmarshalError", /* @__PURE__ */ $.pointerType("asn1.invalidUnmarshalError"))]
	}
	let __goscriptTuple36: any = await parseField($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())), b, 0, __goscript_common.parseFieldParameters(params), 0)
	let offset = __goscriptTuple36[0]
	err = __goscriptTuple36[1]
	if (err != null) {
		return [null, err]
	}
	return [$.goSlice(b, offset, undefined), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "asn1.BitString", zero: () => new BitString(undefined, true), methods: {At: (receiver: any, ...args: any[]) => $.pointerValue(receiver).At(...$.stripGenericTypeArgs(args)), RightAlign: (receiver: any, ...args: any[]) => $.pointerValue(receiver).RightAlign(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), zero: () => null, methods: {Equal: (receiver: any, ...args: any[]) => (ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int", "asn1.Enumerated"), zero: () => 0 }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("bool", "asn1.Flag"), zero: () => false }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "time.Time", zero: () => $.markAsStructValue(new time.Time()), methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddDate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddDate(...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => $.pointerValue(receiver).After(...$.stripGenericTypeArgs(args)), AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), AppendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFormat(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Before(...$.stripGenericTypeArgs(args)), Clock: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clock(...$.stripGenericTypeArgs(args)), Compare: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Compare(...$.stripGenericTypeArgs(args)), Date: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Date(...$.stripGenericTypeArgs(args)), Day: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Day(...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Equal(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GoString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GoString(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Hour: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Hour(...$.stripGenericTypeArgs(args)), ISOWeek: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ISOWeek(...$.stripGenericTypeArgs(args)), In: (receiver: any, ...args: any[]) => $.pointerValue(receiver).In(...$.stripGenericTypeArgs(args)), IsDST: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsDST(...$.stripGenericTypeArgs(args)), IsZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsZero(...$.stripGenericTypeArgs(args)), Local: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Local(...$.stripGenericTypeArgs(args)), Location: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Location(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Minute: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Minute(...$.stripGenericTypeArgs(args)), Month: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Month(...$.stripGenericTypeArgs(args)), Nanosecond: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Nanosecond(...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Round(...$.stripGenericTypeArgs(args)), Second: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Second(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Truncate(...$.stripGenericTypeArgs(args)), UTC: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UTC(...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unix(...$.stripGenericTypeArgs(args)), UnixMicro: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMicro(...$.stripGenericTypeArgs(args)), UnixMilli: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixMilli(...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnixNano(...$.stripGenericTypeArgs(args)), Weekday: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Weekday(...$.stripGenericTypeArgs(args)), Year: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Year(...$.stripGenericTypeArgs(args)), YearDay: (receiver: any, ...args: any[]) => $.pointerValue(receiver).YearDay(...$.stripGenericTypeArgs(args)), Zone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Zone(...$.stripGenericTypeArgs(args)), ZoneBounds: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ZoneBounds(...$.stripGenericTypeArgs(args)), absSec: (receiver: any, ...args: any[]) => $.pointerValue(receiver).absSec(...$.stripGenericTypeArgs(args)), appendFormat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormat(...$.stripGenericTypeArgs(args)), appendFormatRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendFormatRFC3339(...$.stripGenericTypeArgs(args)), appendStrictRFC3339: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendStrictRFC3339(...$.stripGenericTypeArgs(args)), appendTo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).appendTo(...$.stripGenericTypeArgs(args)), locabs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).locabs(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "asn1.RawValue", zero: () => new RawValue(undefined, true) }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), zero: () => null }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("big.Int"), zero: () => null, methods: {Abs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Abs(...$.stripGenericTypeArgs(args)), Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), And: (receiver: any, ...args: any[]) => $.pointerValue(receiver).And(...$.stripGenericTypeArgs(args)), AndNot: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AndNot(...$.stripGenericTypeArgs(args)), Append: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Append(...$.stripGenericTypeArgs(args)), AppendText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendText(...$.stripGenericTypeArgs(args)), Binomial: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Binomial(...$.stripGenericTypeArgs(args)), Bit: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bit(...$.stripGenericTypeArgs(args)), BitLen: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BitLen(...$.stripGenericTypeArgs(args)), Bits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bits(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), Cmp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Cmp(...$.stripGenericTypeArgs(args)), CmpAbs: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CmpAbs(...$.stripGenericTypeArgs(args)), Div: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Div(...$.stripGenericTypeArgs(args)), DivMod: (receiver: any, ...args: any[]) => $.pointerValue(receiver).DivMod(...$.stripGenericTypeArgs(args)), Divide: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Divide(...$.stripGenericTypeArgs(args)), Exp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Exp(...$.stripGenericTypeArgs(args)), FillBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FillBytes(...$.stripGenericTypeArgs(args)), Float64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Float64(...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Format(...$.stripGenericTypeArgs(args)), GCD: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GCD(...$.stripGenericTypeArgs(args)), GobDecode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobDecode(...$.stripGenericTypeArgs(args)), GobEncode: (receiver: any, ...args: any[]) => $.pointerValue(receiver).GobEncode(...$.stripGenericTypeArgs(args)), Int64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Int64(...$.stripGenericTypeArgs(args)), IsInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsInt64(...$.stripGenericTypeArgs(args)), IsUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsUint64(...$.stripGenericTypeArgs(args)), Lsh: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Lsh(...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalJSON(...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalText(...$.stripGenericTypeArgs(args)), Mod: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Mod(...$.stripGenericTypeArgs(args)), ModInverse: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ModInverse(...$.stripGenericTypeArgs(args)), ModSqrt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ModSqrt(...$.stripGenericTypeArgs(args)), Mul: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Mul(...$.stripGenericTypeArgs(args)), MulRange: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MulRange(...$.stripGenericTypeArgs(args)), Neg: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Neg(...$.stripGenericTypeArgs(args)), Not: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Not(...$.stripGenericTypeArgs(args)), Or: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Or(...$.stripGenericTypeArgs(args)), ProbablyPrime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ProbablyPrime(...$.stripGenericTypeArgs(args)), Quo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Quo(...$.stripGenericTypeArgs(args)), QuoRem: (receiver: any, ...args: any[]) => $.pointerValue(receiver).QuoRem(...$.stripGenericTypeArgs(args)), Rand: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rand(...$.stripGenericTypeArgs(args)), Rem: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rem(...$.stripGenericTypeArgs(args)), Rsh: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Rsh(...$.stripGenericTypeArgs(args)), Scan: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Scan(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBit: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBit(...$.stripGenericTypeArgs(args)), SetBits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBits(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetInt64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetInt64(...$.stripGenericTypeArgs(args)), SetString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetString(...$.stripGenericTypeArgs(args)), SetUint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetUint64(...$.stripGenericTypeArgs(args)), Sign: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sign(...$.stripGenericTypeArgs(args)), Sqrt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sqrt(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sub(...$.stripGenericTypeArgs(args)), Text: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Text(...$.stripGenericTypeArgs(args)), TrailingZeroBits: (receiver: any, ...args: any[]) => $.pointerValue(receiver).TrailingZeroBits(...$.stripGenericTypeArgs(args)), Uint64: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Uint64(...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalJSON(...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalText(...$.stripGenericTypeArgs(args)), Xor: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Xor(...$.stripGenericTypeArgs(args)), exp: (receiver: any, ...args: any[]) => $.pointerValue(receiver).exp(...$.stripGenericTypeArgs(args)), expSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).expSlow(...$.stripGenericTypeArgs(args)), lehmerGCD: (receiver: any, ...args: any[]) => $.pointerValue(receiver).lehmerGCD(...$.stripGenericTypeArgs(args)), modSqrt3Mod4Prime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrt3Mod4Prime(...$.stripGenericTypeArgs(args)), modSqrt5Mod8Prime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrt5Mod8Prime(...$.stripGenericTypeArgs(args)), modSqrtTonelliShanks: (receiver: any, ...args: any[]) => $.pointerValue(receiver).modSqrtTonelliShanks(...$.stripGenericTypeArgs(args)), mul: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mul(...$.stripGenericTypeArgs(args)), scaleDenom: (receiver: any, ...args: any[]) => $.pointerValue(receiver).scaleDenom(...$.stripGenericTypeArgs(args)), scan: (receiver: any, ...args: any[]) => $.pointerValue(receiver).scan(...$.stripGenericTypeArgs(args)), setFromScanner: (receiver: any, ...args: any[]) => $.pointerValue(receiver).setFromScanner(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({Equal: (receiver: any, ...args: any[]) => (ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ([$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
