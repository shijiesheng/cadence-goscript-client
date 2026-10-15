// Generated file based on default.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as ptext from "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/text/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/defval", ["defval.Format"])

export type Format = number

export const Descriptor: Format = 1

export const GoTag: Format = 2

export async function Unmarshal(s: string, k: protoreflect.Kind, evs: protoreflect.EnumValueDescriptors | null, f: Format): globalThis.Promise<[protoreflect.Value, protoreflect.EnumValueDescriptor | null, $.GoError]> {
	switch (k) {
		case protoreflect.BoolKind:
		{
			if (f == 2) {
				switch (s) {
					case "1":
					{
						return [protoreflect.ValueOfBool(true), null, null]
						break
					}
					case "0":
					{
						return [protoreflect.ValueOfBool(false), null, null]
						break
					}
				}
			} else {
				switch (s) {
					case "true":
					{
						return [protoreflect.ValueOfBool(true), null, null]
						break
					}
					case "false":
					{
						return [protoreflect.ValueOfBool(false), null, null]
						break
					}
				}
			}
			break
		}
		case protoreflect.EnumKind:
		{
			if (f == 2) {
				// Go tags use the numeric form of the enum value.
				{
					let [n, err] = strconv.ParseInt(s, 10, 32)
					if (err == null) {
						{
							let ev = (__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).ByNumber($.int(n, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (ev != null) {
								return [protoreflect.ValueOfEnum((__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), ev, null]
							}
						}
					}
				}
			} else {
				// Descriptor default_value use the enum identifier.
				let ev = (__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).ByName(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (ev != null) {
					return [protoreflect.ValueOfEnum((__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), ev, null]
				}
			}
			break
		}
		case protoreflect.Int32Kind:
		case protoreflect.Sint32Kind:
		case protoreflect.Sfixed32Kind:
		{
			{
				let [v, err] = strconv.ParseInt(s, 10, 32)
				if (err == null) {
					return [protoreflect.ValueOfInt32($.int(v, 32)), null, null]
				}
			}
			break
		}
		case protoreflect.Int64Kind:
		case protoreflect.Sint64Kind:
		case protoreflect.Sfixed64Kind:
		{
			{
				let [v, err] = strconv.ParseInt(s, 10, 64)
				if (err == null) {
					return [protoreflect.ValueOfInt64($.int64(v)), null, null]
				}
			}
			break
		}
		case protoreflect.Uint32Kind:
		case protoreflect.Fixed32Kind:
		{
			{
				let [v, err] = strconv.ParseUint(s, 10, 32)
				if (err == null) {
					return [protoreflect.ValueOfUint32($.uint(v, 32)), null, null]
				}
			}
			break
		}
		case protoreflect.Uint64Kind:
		case protoreflect.Fixed64Kind:
		{
			{
				let [v, err] = strconv.ParseUint(s, 10, 64)
				if (err == null) {
					return [protoreflect.ValueOfUint64($.uint64(v)), null, null]
				}
			}
			break
		}
		case protoreflect.FloatKind:
		case protoreflect.DoubleKind:
		{
			let v: number = 0
			let err: $.GoError = null! as $.GoError
			switch (s) {
				case "-inf":
				{
					v = math.Inf(-1)
					break
				}
				case "inf":
				{
					v = math.Inf(1)
					break
				}
				case "nan":
				{
					v = math.NaN()
					break
				}
				default:
				{
					let __goscriptTuple0: any = strconv.ParseFloat(s, 64)
					v = __goscriptTuple0[0]
					err = __goscriptTuple0[1]
					break
				}
			}
			if (err == null) {
				if (k == 2) {
					return [protoreflect.ValueOfFloat32(globalThis.Math.fround(v)), null, null]
				} else {
					return [protoreflect.ValueOfFloat64(v), null, null]
				}
			}
			break
		}
		case protoreflect.StringKind:
		{
			return [protoreflect.ValueOfString(s), null, null]
			break
		}
		case protoreflect.BytesKind:
		{
			{
				let __goscriptTuple1: any = await unmarshalBytes(s)
				let b: $.Slice<number> = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					return [protoreflect.ValueOfBytes(b), null, null]
				}
			}
			break
		}
	}
	return [new protoreflect.Value(undefined, true), null, await errors.New("could not parse value for %v: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), s]))]
}

export async function Marshal(v: protoreflect.Value, ev: protoreflect.EnumValueDescriptor | null, k: protoreflect.Kind, f: Format): globalThis.Promise<[string, $.GoError]> {
	switch (k) {
		case protoreflect.BoolKind:
		{
			if (f == 2) {
				if (await v.Bool()) {
					return ["1", null]
				} else {
					return ["0", null]
				}
			} else {
				if (await v.Bool()) {
					return ["true", null]
				} else {
					return ["false", null]
				}
			}
			break
		}
		case protoreflect.EnumKind:
		{
			if (f == 2) {
				return [strconv.FormatInt($.int64(await v.Enum()), 10), null]
			} else {
				return [(__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
			}
			break
		}
		case protoreflect.Int32Kind:
		case protoreflect.Sint32Kind:
		case protoreflect.Sfixed32Kind:
		case protoreflect.Int64Kind:
		case protoreflect.Sint64Kind:
		case protoreflect.Sfixed64Kind:
		{
			return [strconv.FormatInt(await v.Int(), 10), null]
			break
		}
		case protoreflect.Uint32Kind:
		case protoreflect.Fixed32Kind:
		case protoreflect.Uint64Kind:
		case protoreflect.Fixed64Kind:
		{
			return [strconv.FormatUint(await v.Uint(), 10), null]
			break
		}
		case protoreflect.FloatKind:
		case protoreflect.DoubleKind:
		{
			let __goscriptShadow0 = await v.Float()
			switch ((true as boolean)) {
				case math.IsInf(__goscriptShadow0, -1):
				{
					return ["-inf", null]
					break
				}
				case math.IsInf(__goscriptShadow0, 1):
				{
					return ["inf", null]
					break
				}
				case math.IsNaN(__goscriptShadow0):
				{
					return ["nan", null]
					break
				}
				default:
				{
					if (k == 2) {
						return [strconv.FormatFloat(__goscriptShadow0, 103, -1, 32), null]
					} else {
						return [strconv.FormatFloat(__goscriptShadow0, 103, -1, 64), null]
					}
					break
				}
			}
			break
		}
		case protoreflect.StringKind:
		{
			return [await v.String(), null]
			break
		}
		case protoreflect.BytesKind:
		{
			{
				let [s, ok] = await marshalBytes(await v.Bytes())
				if (ok) {
					return [s, null]
				}
			}
			break
		}
	}
	return ["", await errors.New("could not format value for %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue((v).clone(), "protoreflect.Value", "protoreflect.Value")]))]
}

export async function unmarshalBytes(s: string): globalThis.Promise<[$.Slice<number>, boolean]> {
	// Bytes values use the same escaping as the text format,
	// however they lack the surrounding double quotes.
	let [v, err] = await ptext.UnmarshalString($.concatString(($.concatString("\"", s)), "\""))
	if (err != null) {
		return [null, false]
	}
	return [$.stringToBytes(v), true]
}

export async function marshalBytes(b: $.Slice<number>): globalThis.Promise<[string, boolean]> {
	let s: $.Slice<number> = null! as $.Slice<number>
	for (let __goscriptRangeTarget0 = b, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		switch (c) {
			case 10:
			{
				s = $.appendSlice(s, $.stringToBytes("\\n"), $.byteSliceHint)
				break
			}
			case 13:
			{
				s = $.appendSlice(s, $.stringToBytes("\\r"), $.byteSliceHint)
				break
			}
			case 9:
			{
				s = $.appendSlice(s, $.stringToBytes("\\t"), $.byteSliceHint)
				break
			}
			case 34:
			{
				s = $.appendSlice(s, $.stringToBytes("\\\""), $.byteSliceHint)
				break
			}
			case 39:
			{
				s = $.appendSlice(s, $.stringToBytes("\\'"), $.byteSliceHint)
				break
			}
			case 92:
			{
				s = $.appendSlice(s, $.stringToBytes("\\\\"), $.byteSliceHint)
				break
			}
			default:
			{
				{
					let printableASCII = (c >= 0x20) && (c <= 0x7e)
					if (printableASCII) {
						s = $.append(s, $.uint(c, 8), $.byteSliceHint)
					} else {
						s = $.appendSlice(s, $.stringToBytes(await fmt.Sprintf("\\%03o", $.basicInterfaceValue(c, "byte", "uint8"))), $.byteSliceHint)
					}
				}
				break
			}
		}
	}
	return [$.bytesToString(s), true]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
