// Generated file based on decode_token.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as __goscript_decode_number from "./decode_number.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "./decode_number.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/text", ["text.Kind", "text.NameKind", "text.Token"])

export type Kind = number

$.registerNamedValueType(
	"text.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*text.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type NameKind = number

$.registerNamedValueType(
	"text.NameKind",
	{String: (receiver: any, ...args: any[]) => (NameKind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*text.NameKind",
	{String: (receiver: any, ...args: any[]) => (NameKind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Token {
	// Kind of the Token object.
	public get kind(): Kind {
		return this._fields.kind
	}

	public set kind(value: Kind) {
		this._fields.kind = value
	}

	// attrs contains metadata for the following Kinds:
	// Name: hasSeparator bit and one of NameKind.
	// Scalar: one of numberValue, stringValue, literalValue.
	public get attrs(): number {
		return this._fields.attrs
	}

	public set attrs(value: number) {
		this._fields.attrs = value
	}

	// numAttrs contains metadata for numberValue:
	// - highest bit is whether negative or positive.
	// - lower bits indicate one of numDec, numHex, numOct, numFloat.
	public get numAttrs(): number {
		return this._fields.numAttrs
	}

	public set numAttrs(value: number) {
		this._fields.numAttrs = value
	}

	// pos provides the position of the token in the original input.
	public get pos(): number {
		return this._fields.pos
	}

	public set pos(value: number) {
		this._fields.pos = value
	}

	// raw bytes of the serialized token.
	// This is a subslice into the original input.
	public get raw(): $.Slice<number> {
		return this._fields.raw
	}

	public set raw(value: $.Slice<number>) {
		this._fields.raw = value
	}

	// str contains parsed string for the following:
	// - stringValue of Scalar kind
	// - numberValue of Scalar kind
	// - TypeName of Name kind
	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public _fields: {
		kind: Kind
		attrs: number
		numAttrs: number
		pos: number
		raw: $.Slice<number>
		str: string
	}

	constructor(init?: Partial<{kind?: Kind, attrs?: number, numAttrs?: number, pos?: number, raw?: $.Slice<number>, str?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			kind: init?.kind ?? (0 as Kind),
			attrs: init?.attrs ?? (0 as number),
			numAttrs: init?.numAttrs ?? (0 as number),
			pos: init?.pos ?? (0 as number),
			raw: init?.raw ?? (null! as $.Slice<number>),
			str: init?.str ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Token {
		return new Token(this, true)
	}

	public __goscriptAssign(source: Token): void {
		const target = this._fields
		const values = source._fields
		target.kind = values.kind
		target.attrs = values.attrs
		target.numAttrs = values.numAttrs
		target.pos = values.pos
		target.raw = values.raw
		target.str = values.str
	}

	public Bool(): [boolean, boolean] {
		const t = this;
		if (t.kind != 3) {
			return [false, false]
		}
		switch (t.attrs) {
			case 3:
			{
				{
					let [b, ok] = $.mapGet<string, boolean, boolean>(boolLits, $.bytesToString(t.raw), false)
					if (ok) {
						return [b, true]
					}
				}
				break
			}
			case 1:
			{
				let [n, err] = strconv.ParseUint(t.str, 0, 64)
				if (err == null) {
					switch (n) {
						case 0n:
						{
							return [false, true]
							break
						}
						case 1n:
						{
							return [true, true]
							break
						}
					}
				}
				break
			}
		}
		return [false, false]
	}

	public Enum(): [string, boolean] {
		const t = this;
		if (((t.kind != 3) || (t.attrs != 3)) || (($.sliceLen(t.raw) > 0) && ($.arrayIndex(t.raw!, 0) == 45))) {
			return ["", false]
		}
		return [$.bytesToString(t.raw), true]
	}

	public async FieldNumber(): globalThis.Promise<number> {
		const t = this;
		if ((t.kind != 2) || ($.uint((t.attrs & $.uint(3, 8)), 8) == 0)) {
			$.panic(await fmt.Sprintf("Token is not a FieldNumber: %s:%s", $.namedValueInterfaceValue<any>(t.kind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>($.uint(t.attrs & ~(128), 8), "text.NameKind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
		}
		// Following should not return an error as it had already been called right
		// before this Token was constructed.
		let [num, ] = strconv.ParseInt($.bytesToString(t.raw), 10, 32)
		return $.int(num, 32)
	}

	public Float32(): [number, boolean] {
		const t = this;
		if (t.kind != 3) {
			return [0, false]
		}
		switch (t.attrs) {
			case 3:
			{
				{
					let [f, ok] = $.mapGet<string, number, number>(floatLits, strings.ToLower($.bytesToString(t.raw)), 0)
					if (ok) {
						return [globalThis.Math.fround(f), true]
					}
				}
				break
			}
			case 1:
			{
				let [n, err] = strconv.ParseFloat(t.str, 64)
				if (err == null) {
					// Overflows are treated as (-)infinity.
					return [globalThis.Math.fround(n), true]
				}
				let nerr: strconv.NumError | $.VarRef<strconv.NumError> | null = ((err as any)?.__goType === "*strconv.NumError" && (err as any).__goValue === undefined && (err as any).__isTypedNil !== true ? ((err as any) as strconv.NumError | $.VarRef<strconv.NumError> | null) : $.mustTypeAssert<strconv.NumError | $.VarRef<strconv.NumError> | null>(err, /* @__PURE__ */ $.pointerType("strconv.NumError")))
				if ($.comparableEqual($.pointerValue<strconv.NumError>(nerr).Err, strconv.ErrRange)) {
					return [globalThis.Math.fround(n), true]
				}
				break
			}
		}
		return [0, false]
	}

	public Float64(): [number, boolean] {
		const t = this;
		if (t.kind != 3) {
			return [0, false]
		}
		switch (t.attrs) {
			case 3:
			{
				{
					let [f, ok] = $.mapGet<string, number, number>(floatLits, strings.ToLower($.bytesToString(t.raw)), 0)
					if (ok) {
						return [f, true]
					}
				}
				break
			}
			case 1:
			{
				let [n, err] = strconv.ParseFloat(t.str, 64)
				if (err == null) {
					return [n, true]
				}
				let nerr: strconv.NumError | $.VarRef<strconv.NumError> | null = ((err as any)?.__goType === "*strconv.NumError" && (err as any).__goValue === undefined && (err as any).__isTypedNil !== true ? ((err as any) as strconv.NumError | $.VarRef<strconv.NumError> | null) : $.mustTypeAssert<strconv.NumError | $.VarRef<strconv.NumError> | null>(err, /* @__PURE__ */ $.pointerType("strconv.NumError")))
				if ($.comparableEqual($.pointerValue<strconv.NumError>(nerr).Err, strconv.ErrRange)) {
					return [n, true]
				}
				break
			}
		}
		return [0, false]
	}

	public async HasSeparator(): globalThis.Promise<boolean> {
		const t = this;
		if (t.kind == 2) {
			return $.uint((t.attrs & 128), 8) != 0
		}
		$.panic(await fmt.Sprintf("Token is not a Name type: %s", $.namedValueInterfaceValue<any>(t.kind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async IdentName(): globalThis.Promise<string> {
		const t = this;
		if ((t.kind == 2) && ($.uint((t.attrs & $.uint(1, 8)), 8) != 0)) {
			return $.bytesToString(t.raw)
		}
		$.panic(await fmt.Sprintf("Token is not an IdentName: %s:%s", $.namedValueInterfaceValue<any>(t.kind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>($.uint(t.attrs & ~(128), 8), "text.NameKind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Int32(): [number, boolean] {
		const t = this;
		if (((t.kind != 3) || (t.attrs != 1)) || ($.uint((t.numAttrs & 4), 8) > 0)) {
			return [0, false]
		}
		{
			let [n, err] = strconv.ParseInt(t.str, 0, 32)
			if (err == null) {
				return [$.int(n, 32), true]
			}
		}
		// C++ accepts large positive hex numbers as negative values.
		// This feature is here for proto1 backwards compatibility purposes.
		if (flags.ProtoLegacy && (t.numAttrs == 1)) {
			{
				let [n, err] = strconv.ParseUint(t.str, 0, 32)
				if (err == null) {
					return [$.int(n, 32), true]
				}
			}
		}
		return [0, false]
	}

	public Int64(): [bigint, boolean] {
		const t = this;
		if (((t.kind != 3) || (t.attrs != 1)) || ($.uint((t.numAttrs & 4), 8) > 0)) {
			return [0n, false]
		}
		{
			let [n, err] = strconv.ParseInt(t.str, 0, 64)
			if (err == null) {
				return [n, true]
			}
		}
		// C++ accepts large positive hex numbers as negative values.
		// This feature is here for proto1 backwards compatibility purposes.
		if (flags.ProtoLegacy && (t.numAttrs == 1)) {
			{
				let [n, err] = strconv.ParseUint(t.str, 0, 64)
				if (err == null) {
					return [$.int64(n), true]
				}
			}
		}
		return [0n, false]
	}

	public Kind(): Kind {
		const t = this;
		return t.kind
	}

	public async NameKind(): globalThis.Promise<NameKind> {
		const t = this;
		if (t.kind == 2) {
			return $.uint(t.attrs & ~(128), 8)
		}
		$.panic(await fmt.Sprintf("Token is not a Name type: %s", $.namedValueInterfaceValue<any>(t.kind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Pos(): number {
		const t = this;
		return t.pos
	}

	public RawString(): string {
		const t = this;
		return $.bytesToString(t.raw)
	}

	public String(): [string, boolean] {
		const t = this;
		if ((t.kind != 3) || (t.attrs != 2)) {
			return ["", false]
		}
		return [t.str, true]
	}

	public async TypeName(): globalThis.Promise<string> {
		const t = this;
		if ((t.kind == 2) && ($.uint((t.attrs & $.uint(2, 8)), 8) != 0)) {
			return t.str
		}
		$.panic(await fmt.Sprintf("Token is not a TypeName: %s:%s", $.namedValueInterfaceValue<any>(t.kind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>($.uint(t.attrs & ~(128), 8), "text.NameKind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Uint32(): [number, boolean] {
		const t = this;
		if ((((t.kind != 3) || (t.attrs != 1)) || ($.uint((t.numAttrs & 128), 8) > 0)) || ($.uint((t.numAttrs & 4), 8) > 0)) {
			return [0, false]
		}
		let [n, err] = strconv.ParseUint(t.str, 0, 32)
		if (err != null) {
			return [0, false]
		}
		return [$.uint(n, 32), true]
	}

	public Uint64(): [bigint, boolean] {
		const t = this;
		if ((((t.kind != 3) || (t.attrs != 1)) || ($.uint((t.numAttrs & 128), 8) > 0)) || ($.uint((t.numAttrs & 4), 8) > 0)) {
			return [0n, false]
		}
		let [n, err] = strconv.ParseUint(t.str, 0, 64)
		if (err != null) {
			return [0n, false]
		}
		return [n, true]
	}

	static __typeInfo = $.registerStructType(
		"text.Token",
		() => new Token(),
		() => [$.methodSignature("Bool", [], [/* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FieldNumber", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HasSeparator", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IdentName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Int32", [], [/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("uint8", "text.Kind")]), $.methodSignature("NameKind", [], [/* @__PURE__ */ $.basicType("uint8", "text.NameKind")]), $.methodSignature("Pos", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("RawString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("TypeName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")])],
		Token,
		() => [/* @__PURE__ */ $.structField("kind", /* @__PURE__ */ $.basicType("uint8", "text.Kind"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("attrs", /* @__PURE__ */ $.basicType("uint8"), [1], 1, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("numAttrs", /* @__PURE__ */ $.basicType("uint8"), [2], 2, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int"), [3], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 16, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [5], 40, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" })]
	)
}

export const Invalid: Kind = 0

export const EOF: Kind = 1

export const Name: Kind = 2

export const Scalar: Kind = 3

export const MessageOpen: Kind = 4

export const MessageClose: Kind = 5

export const ListOpen: Kind = 6

export const ListClose: Kind = 7

export const comma: Kind = 8

export const semicolon: Kind = 9

export const bof: Kind = 0

export const IdentName: NameKind = 1

export const TypeName: NameKind = 2

export const FieldNumber: NameKind = 3

export const hasSeparator: number = 128

export const numberValue: number = 1

export const stringValue: number = 2

export const literalValue: number = 3

export const isNegative: number = 128

export async function Kind_String(t: Kind): globalThis.Promise<string> {
	switch (t) {
		case 0:
		{
			return "<invalid>"
			break
		}
		case 1:
		{
			return "eof"
			break
		}
		case 3:
		{
			return "scalar"
			break
		}
		case 2:
		{
			return "name"
			break
		}
		case 4:
		{
			return "{"
			break
		}
		case 5:
		{
			return "}"
			break
		}
		case 6:
		{
			return "["
			break
		}
		case 7:
		{
			return "]"
			break
		}
		case 8:
		{
			return ","
			break
		}
		case 9:
		{
			return ";"
			break
		}
		default:
		{
			return fmt.Sprintf("<invalid:%v>", $.basicInterfaceValue($.uint(t, 8), "uint8"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function NameKind_String(t: NameKind): globalThis.Promise<string> {
	switch (t) {
		case 1:
		{
			return "IdentName"
			break
		}
		case 2:
		{
			return "TypeName"
			break
		}
		case 3:
		{
			return "FieldNumber"
			break
		}
		default:
		{
			return fmt.Sprintf("<invalid:%v>", $.basicInterfaceValue($.uint(t, 8), "uint8"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let boolLits: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["t", true], ["true", true], ["True", true], ["f", false], ["false", false], ["False", false]])

export function __goscript_set_boolLits(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	boolLits = __goscriptValue
}

export let floatLits: globalThis.Map<string, number> | null = $.makeMap<string, number>([["nan", math.NaN()], ["inf", math.Inf(1)], ["infinity", math.Inf(1)], ["-inf", math.Inf(-1)], ["-infinity", math.Inf(-1)]])

export function __goscript_set_floatLits(__goscriptValue: globalThis.Map<string, number> | null): void {
	floatLits = __goscriptValue
}

export function TokenEquals(x: Token, y: Token): boolean {
	return (((((x.kind == y.kind) && (x.attrs == y.attrs)) && (x.numAttrs == y.numAttrs)) && (x.pos == y.pos)) && bytes.Equal(x.raw, y.raw)) && ($.stringEqual(x.str, y.str))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "text.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (NameKind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint8", "text.NameKind"))
}
