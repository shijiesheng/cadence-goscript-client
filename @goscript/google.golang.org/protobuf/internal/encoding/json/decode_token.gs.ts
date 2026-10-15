// Generated file based on decode_token.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_decode_number from "./decode_number.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "./decode_number.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/json", ["json.Kind", "json.Token"])

export type Kind = number

$.registerNamedValueType(
	"json.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*json.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Token {
	// Token kind.
	public get kind(): Kind {
		return this._fields.kind
	}

	public set kind(value: Kind) {
		this._fields.kind = value
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

	// boo is parsed boolean value.
	public get boo(): boolean {
		return this._fields.boo
	}

	public set boo(value: boolean) {
		this._fields.boo = value
	}

	// str is parsed string value.
	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public _fields: {
		kind: Kind
		pos: number
		raw: $.Slice<number>
		boo: boolean
		str: string
	}

	constructor(init?: Partial<{kind?: Kind, pos?: number, raw?: $.Slice<number>, boo?: boolean, str?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			kind: init?.kind ?? (0 as Kind),
			pos: init?.pos ?? (0 as number),
			raw: init?.raw ?? (null! as $.Slice<number>),
			boo: init?.boo ?? (false as boolean),
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
		target.pos = values.pos
		target.raw = values.raw
		target.boo = values.boo
		target.str = values.str
	}

	public async Bool(): globalThis.Promise<boolean> {
		const t = this;
		if (t.kind == 4) {
			return t.boo
		}
		$.panic(await fmt.Sprintf("Token is not a Bool: %v", t.RawString()))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Float(bitSize: number): [number, boolean] {
		const t = this;
		if (t.kind != 8) {
			return [0, false]
		}
		let [f, err] = strconv.ParseFloat(t.RawString(), bitSize)
		if (err != null) {
			return [0, false]
		}
		return [f, true]
	}

	public Int(bitSize: number): [bigint, boolean] {
		const t = this;
		let [s, ok] = t.getIntStr()
		if (!ok) {
			return [0n, false]
		}
		let [n, err] = strconv.ParseInt(s, 10, bitSize)
		if (err != null) {
			return [0n, false]
		}
		return [n, true]
	}

	public Kind(): Kind {
		const t = this;
		return t.kind
	}

	public async Name(): globalThis.Promise<string> {
		const t = this;
		if (t.kind == 32) {
			return t.str
		}
		$.panic(await fmt.Sprintf("Token is not a Name: %v", t.RawString()))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ParsedString(): globalThis.Promise<string> {
		const t = this;
		if (t.kind == 16) {
			return t.str
		}
		$.panic(await fmt.Sprintf("Token is not a String: %v", t.RawString()))
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

	public Uint(bitSize: number): [bigint, boolean] {
		const t = this;
		let [s, ok] = t.getIntStr()
		if (!ok) {
			return [0n, false]
		}
		let [n, err] = strconv.ParseUint(s, 10, bitSize)
		if (err != null) {
			return [0n, false]
		}
		return [n, true]
	}

	public getIntStr(): [string, boolean] {
		const t = this;
		if (t.kind != 8) {
			return ["", false]
		}
		let [parts, ok] = __goscript_decode_number.parseNumberParts(t.raw)
		if (!ok) {
			return ["", false]
		}
		return __goscript_decode_number.normalizeToIntString(parts)
	}

	static __typeInfo = $.registerStructType(
		"json.Token",
		() => new Token(),
		() => [$.methodSignature("Bool", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Float", [["bitSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Int", [["bitSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("uint16", "json.Kind")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ParsedString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Pos", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("RawString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Uint", [["bitSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getIntStr", [], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")])],
		Token,
		() => [/* @__PURE__ */ $.structField("kind", /* @__PURE__ */ $.basicType("uint16", "json.Kind"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("boo", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" })]
	)
}

export const Invalid: Kind = 0

export const EOF: Kind = 1

export const Null: Kind = 2

export const Bool: Kind = 4

export const Number: Kind = 8

export const String: Kind = 16

export const Name: Kind = 32

export const ObjectOpen: Kind = 64

export const ObjectClose: Kind = 128

export const ArrayOpen: Kind = 256

export const ArrayClose: Kind = 512

export const comma: Kind = 1024

export function Kind_String(k: Kind): string {
	switch (k) {
		case 1:
		{
			return "eof"
			break
		}
		case 2:
		{
			return "null"
			break
		}
		case 4:
		{
			return "bool"
			break
		}
		case 8:
		{
			return "number"
			break
		}
		case 16:
		{
			return "string"
			break
		}
		case 64:
		{
			return "{"
			break
		}
		case 128:
		{
			return "}"
			break
		}
		case 32:
		{
			return "name"
			break
		}
		case 256:
		{
			return "["
			break
		}
		case 512:
		{
			return "]"
			break
		}
		case 1024:
		{
			return ","
			break
		}
	}
	return "<invalid>"
}

export function TokenEquals(x: Token, y: Token): boolean {
	return ((((x.kind == y.kind) && (x.pos == y.pos)) && bytes.Equal(x.raw, y.raw)) && (x.boo == y.boo)) && ($.stringEqual(x.str, y.str))
}
