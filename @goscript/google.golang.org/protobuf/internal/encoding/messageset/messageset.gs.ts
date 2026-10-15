// Generated file based on messageset.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/math/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export const FieldItem: protowire.Number = 1

export const FieldTypeID: protowire.Number = 2

export const FieldMessage: protowire.Number = 3

export const ExtensionName: string = "message_set_extension"

export async function IsMessageSet(md: protoreflect.MessageDescriptor | null): globalThis.Promise<boolean> {
	let [xmd, ok] = $.typeAssertTuple<any>(md, { kind: $.TypeKind.Interface, methods: [{ name: "IsMessageSet", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
	return ok && (__goscriptAwait = (xmd !== null && (xmd as any).__isVarRef !== true && (xmd as any).__goValue === undefined ? (xmd as any) : $.pointerValue<any>(xmd)).IsMessageSet(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function IsMessageSetExtension(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	switch ((true as boolean)) {
		case !$.stringEqual((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "message_set_extension"):
		{
			return false
			break
		}
		case !await IsMessageSet((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)):
		{
			return false
			break
		}
		case !$.stringEqual(protoreflect.FullName_Parent((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)):
		{
			return false
			break
		}
	}
	return true
}

export function SizeField(num: protowire.Number): number {
	return ((2 * protowire.SizeTag(1)) + protowire.SizeTag(2)) + protowire.SizeVarint($.uint64(num))
}

export async function Unmarshal(b: $.Slice<number>, wantLen: boolean, fn: ((typeID: protowire.Number, value: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	while ($.sliceLen(b) > 0) {
		let [num, wtyp, n] = protowire.ConsumeTag(b)
		if (n < 0) {
			return protowire.ParseError(n)
		}
		b = $.goSlice(b, n, undefined)
		if ((num != 1) || (wtyp != 3)) {
			let __goscriptShadow0: number = protowire.ConsumeFieldValue(num, wtyp, b)
			if (__goscriptShadow0 < 0) {
				return protowire.ParseError(__goscriptShadow0)
			}
			b = $.goSlice(b, __goscriptShadow0, undefined)
			continue
		}
		let __goscriptTuple0: any = await ConsumeFieldValue(b, wantLen)
		let typeID = __goscriptTuple0[0]
		let value: $.Slice<number> = __goscriptTuple0[1]
		n = __goscriptTuple0[2]
		let err = __goscriptTuple0[3]
		if (err != null) {
			return err
		}
		b = $.goSlice(b, n, undefined)
		if (typeID == 0) {
			continue
		}
		{
			let __goscriptShadow1 = (__goscriptAwait = fn!(typeID, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow1 != null) {
				return __goscriptShadow1
			}
		}
	}
	return null
}

export async function ConsumeFieldValue(b: $.Slice<number>, wantLen: boolean): globalThis.Promise<[protowire.Number, $.Slice<number>, number, $.GoError]> {
	let typeid: protowire.Number = 0
	let message: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let ilen = $.sliceLen(b)
	while (true) {
		let [num, wtyp, __goscriptShadow2] = protowire.ConsumeTag(b)
		if (__goscriptShadow2 < 0) {
			return [0, null, 0, protowire.ParseError(__goscriptShadow2)]
		}
		b = $.goSlice(b, __goscriptShadow2, undefined)
		switch ((true as boolean)) {
			case (num == 1) && (wtyp == 4):
			{
				if (wantLen && ($.sliceLen(message) == 0)) {
					// The message field was missing, which should never happen.
					// Be prepared for this case anyway.
					message = protowire.AppendVarint(message, 0n)
				}
				return [typeid, message, ilen - $.sliceLen(b), null]
				break
			}
			case (num == 2) && (wtyp == 0):
			{
				let [v, __goscriptShadow3] = protowire.ConsumeVarint(b)
				if (__goscriptShadow3 < 0) {
					return [0, null, 0, protowire.ParseError(__goscriptShadow3)]
				}
				b = $.goSlice(b, __goscriptShadow3, undefined)
				if ((v < 1n) || (v > 2147483647n)) {
					return [0, null, 0, await errors.New("invalid type_id in message set", null)]
				}
				typeid = $.int(v, 32)
				break
			}
			case (num == 3) && (wtyp == 2):
			{
				let __goscriptTuple1: any = protowire.ConsumeBytes(b)
				let m: $.Slice<number> = __goscriptTuple1[0]
				let __goscriptShadow4 = __goscriptTuple1[1]
				if (__goscriptShadow4 < 0) {
					return [0, null, 0, protowire.ParseError(__goscriptShadow4)]
				}
				if (message == null) {
					if (wantLen) {
						message = $.goSlice(b, undefined, __goscriptShadow4, __goscriptShadow4)
					} else {
						message = $.goSlice(m, undefined, $.sliceLen(m), $.sliceLen(m))
					}
				} else {
					// This case should never happen in practice, but handle it for
					// correctness: The MessageSet item contains multiple message
					// fields, which need to be merged.
					//
					// In the case where we're returning the length, this becomes
					// quite inefficient since we need to strip the length off
					// the existing data and reconstruct it with the combined length.
					if (wantLen) {
						let [, nn] = protowire.ConsumeVarint(message)
						let m0: $.Slice<number> = $.goSlice(message, nn, undefined)
						message = null
						message = protowire.AppendVarint(message, $.uint64($.sliceLen(m0) + $.sliceLen(m)))
						message = $.appendSlice(message, m0, $.byteSliceHint)
						message = $.appendSlice(message, m, $.byteSliceHint)
					} else {
						message = $.appendSlice(message, m, $.byteSliceHint)
					}
				}
				b = $.goSlice(b, __goscriptShadow4, undefined)
				break
			}
			default:
			{
				let __goscriptShadow5: number = protowire.ConsumeFieldValue(num, wtyp, b)
				if (__goscriptShadow5 < 0) {
					return [0, null, 0, protowire.ParseError(__goscriptShadow5)]
				}
				b = $.goSlice(b, __goscriptShadow5, undefined)
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function AppendFieldStart(b: $.Slice<number>, num: protowire.Number): $.Slice<number> {
	b = protowire.AppendTag(b, 1, 3)
	b = protowire.AppendTag(b, 2, 0)
	b = protowire.AppendVarint(b, $.uint64(num))
	return b
}

export function AppendFieldEnd(b: $.Slice<number>): $.Slice<number> {
	return protowire.AppendTag(b, 1, 4)
}

export function SizeUnknown(_unknown: $.Slice<number>): number {
	let size: number = 0
	while ($.sliceLen(_unknown) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(_unknown)
		if ((n < 0) || (typ != 2)) {
			return 0
		}
		_unknown = $.goSlice(_unknown, n, undefined)
		let __goscriptTuple2: any = protowire.ConsumeBytes(_unknown)
		n = __goscriptTuple2[1]
		if (n < 0) {
			return 0
		}
		_unknown = $.goSlice(_unknown, n, undefined)
		size = size + ((SizeField(num) + protowire.SizeTag(3)) + n)
	}
	return size
}

export async function AppendUnknown(b: $.Slice<number>, _unknown: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	while ($.sliceLen(_unknown) > 0) {
		let [num, typ, n] = protowire.ConsumeTag(_unknown)
		if ((n < 0) || (typ != 2)) {
			return [null, await errors.New("invalid data in message set unknown fields", null)]
		}
		_unknown = $.goSlice(_unknown, n, undefined)
		let __goscriptTuple3: any = protowire.ConsumeBytes(_unknown)
		n = __goscriptTuple3[1]
		if (n < 0) {
			return [null, await errors.New("invalid data in message set unknown fields", null)]
		}
		b = AppendFieldStart(b, num)
		b = protowire.AppendTag(b, 3, 2)
		b = $.appendSlice(b, $.goSlice(_unknown, undefined, n), $.byteSliceHint)
		b = AppendFieldEnd(b)
		_unknown = $.goSlice(_unknown, n, undefined)
	}
	return [b, null]
}

var __goscriptAwait: any
