// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/json", ["json.kind", "json.Encoder"])

export type kind = number

export class Encoder {
	public get indent(): string {
		return this._fields.indent
	}

	public set indent(value: string) {
		this._fields.indent = value
	}

	public get lastKind(): kind {
		return this._fields.lastKind
	}

	public set lastKind(value: kind) {
		this._fields.lastKind = value
	}

	public get indents(): $.Slice<number> {
		return this._fields.indents
	}

	public set indents(value: $.Slice<number>) {
		this._fields.indents = value
	}

	public get out(): $.Slice<number> {
		return this._fields.out
	}

	public set out(value: $.Slice<number>) {
		this._fields.out = value
	}

	public _fields: {
		indent: string
		lastKind: kind
		indents: $.Slice<number>
		out: $.Slice<number>
	}

	constructor(init?: Partial<{indent?: string, lastKind?: kind, indents?: $.Slice<number>, out?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			indent: init?.indent ?? ("" as string),
			lastKind: init?.lastKind ?? (0 as kind),
			indents: init?.indents ?? (null! as $.Slice<number>),
			out: init?.out ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoder {
		return new Encoder(this, true)
	}

	public __goscriptAssign(source: Encoder): void {
		const target = this._fields
		const values = source._fields
		target.indent = values.indent
		target.lastKind = values.lastKind
		target.indents = values.indents
		target.out = values.out
	}

	public Bytes(): $.Slice<number> {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		return $.pointerValue<Encoder>(e).out
	}

	public EndArray(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(32) : Encoder.prototype.prepareNext.call(e, 32));
		;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(93, 8), $.byteSliceHint)
	}

	public EndObject(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(8) : Encoder.prototype.prepareNext.call(e, 8));
		;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(125, 8), $.byteSliceHint)
	}

	public StartArray(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(16) : Encoder.prototype.prepareNext.call(e, 16));
		;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(91, 8), $.byteSliceHint)
	}

	public StartObject(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(4) : Encoder.prototype.prepareNext.call(e, 4));
		;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(123, 8), $.byteSliceHint)
	}

	public WriteBool(b: boolean): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2))
		if (b) {
			;(e$ as Encoder).out = $.appendSlice((e$ as Encoder).out, $.stringToBytes("true"), $.byteSliceHint)
		} else {
			;(e$ as Encoder).out = $.appendSlice((e$ as Encoder).out, $.stringToBytes("false"), $.byteSliceHint)
		}
	}

	public WriteFloat(n: number, bitSize: number): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).out = appendFloat((e$ as Encoder).out, n, bitSize)
	}

	public WriteInt(n: bigint): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).out = strconv.AppendInt((e$ as Encoder).out, n, 10)
	}

	public WriteName(s: string): $.GoError {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(1) : Encoder.prototype.prepareNext.call(e, 1))
		let err: $.GoError = null! as $.GoError
		// Append to output regardless of error.
		let __goscriptTuple0: any = appendString((e$ as Encoder).out, s);
		;(e$ as Encoder).out = __goscriptTuple0[0]
		err = __goscriptTuple0[1];
		;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(58, 8), $.byteSliceHint)
		return err
	}

	public WriteNull(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).out = $.appendSlice((e$ as Encoder).out, $.stringToBytes("null"), $.byteSliceHint)
	}

	public WriteString(s: string): $.GoError {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2))
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple1: any = appendString((e$ as Encoder).out, s);
			;(e$ as Encoder).out = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return err
			}
		}
		return null
	}

	public WriteUint(n: bigint): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).out = strconv.AppendUint((e$ as Encoder).out, n, 10)
	}

	public prepareNext(next: kind): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		__defer.defer(() => { ((): void => {
			// Set lastKind to next.
			;(e$ as Encoder).lastKind = next
		})() })

		if ($.stringLen((e$ as Encoder).indent) == 0) {
			// Need to add comma on the following condition.
			if (($.uint(((e$ as Encoder).lastKind & ((2 | 8) | 32)), 8) != 0) && ($.uint((next & (((1 | 2) | 4) | 16)), 8) != 0)) {
				;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(44, 8), $.byteSliceHint)
				// For single-line output, add a random extra space after each
				// comma to make output unstable.
				if (detrand.Bool()) {
					;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(32, 8), $.byteSliceHint)
				}
			}
			return
		}

		switch ((true as boolean)) {
			case $.uint(((e$ as Encoder).lastKind & (4 | 16)), 8) != 0:
			{
				if ($.uint((next & (8 | 32)), 8) == 0) {
					;(e$ as Encoder).indents = $.appendSlice((e$ as Encoder).indents, $.stringToBytes((e$ as Encoder).indent), $.byteSliceHint);
					;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(10, 8), $.byteSliceHint);
					;(e$ as Encoder).out = $.appendSlice((e$ as Encoder).out, (e$ as Encoder).indents, $.byteSliceHint)
				}
				break
			}
			case $.uint(((e$ as Encoder).lastKind & ((2 | 8) | 32)), 8) != 0:
			{
				switch ((true as boolean)) {
					case $.uint((next & (((1 | 2) | 4) | 16)), 8) != 0:
					{
						;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(44, 8), $.uint(10, 8), $.byteSliceHint)
						break
					}
					case $.uint((next & (8 | 32)), 8) != 0:
					{
						;(e$ as Encoder).indents = $.goSlice((e$ as Encoder).indents, undefined, $.sliceLen((e$ as Encoder).indents) - $.stringLen((e$ as Encoder).indent));
						;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(10, 8), $.byteSliceHint)
						break
					}
				}
				;(e$ as Encoder).out = $.appendSlice((e$ as Encoder).out, (e$ as Encoder).indents, $.byteSliceHint)
				break
			}
			case $.uint(((e$ as Encoder).lastKind & 1), 8) != 0:
			{
				;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(32, 8), $.byteSliceHint)
				// For multi-line output, add a random extra space after key: to make
				// output unstable.
				if (detrand.Bool()) {
					;(e$ as Encoder).out = $.append((e$ as Encoder).out, $.uint(32, 8), $.byteSliceHint)
				}
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"json.Encoder",
		() => new Encoder(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("EndArray", [], [], true), $.methodSignature("EndObject", [], [], true), $.methodSignature("StartArray", [], [], true), $.methodSignature("StartObject", [], [], true), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("WriteFloat", [["n", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("WriteInt", [["n", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("WriteName", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteNull", [], [], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteUint", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("prepareNext", [["next", /* @__PURE__ */ $.basicType("uint8", "json.kind")]], [], true)],
		Encoder,
		() => [/* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("lastKind", /* @__PURE__ */ $.basicType("uint8", "json.kind"), [1], 16, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("indents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" })]
	)
}

export const name: kind = 1

export const scalar: kind = 2

export const objectOpen: kind = 4

export const objectClose: kind = 8

export const arrayOpen: kind = 16

export const arrayClose: kind = 32

export async function NewEncoder(buf: $.Slice<number>, indent: string): globalThis.Promise<[Encoder | $.VarRef<Encoder> | null, $.GoError]> {
	let e: Encoder | $.VarRef<Encoder> | null = new Encoder({out: buf})
	if ($.stringLen(indent) > 0) {
		if (!$.stringEqual(strings.Trim(indent, " \t"), "")) {
			return [null, await errors.New("indent may only be composed of space or tab characters", null)]
		}
		$.pointerValue<Encoder>(e).indent = indent
	}
	return [e, null]
}

export let errInvalidUTF8: $.GoError = await errors.New("invalid UTF-8", null)

export function __goscript_set_errInvalidUTF8(__goscriptValue: $.GoError): void {
	errInvalidUTF8 = __goscriptValue
}

export function appendString(out: $.Slice<number>, _in: string): [$.Slice<number>, $.GoError] {
	out = $.append(out, $.uint(34, 8), $.byteSliceHint)
	let i: number = indexNeedEscapeInString(_in)
	let __goscriptAssign0_0: string = $.sliceStringOrBytes(_in, i, undefined)
	let __goscriptAssign0_1: $.Slice<number> = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes(_in, undefined, i)), $.byteSliceHint)
	_in = __goscriptAssign0_0
	out = __goscriptAssign0_1
	while ($.stringLen(_in) > 0) {
		{
			let [r, n] = utf8.DecodeRuneInString(_in)
			switch ((true as boolean)) {
				case (r == 65533) && (n == 1):
				{
					return [out, errInvalidUTF8]
					break
				}
				case ((r < 32) || (r == 34)) || (r == 92):
				{
					out = $.append(out, $.uint(92, 8), $.byteSliceHint)
					switch (r) {
						case 34:
						case 92:
						{
							out = $.append(out, $.uint($.uint(r, 8), 8), $.byteSliceHint)
							break
						}
						case 8:
						{
							out = $.append(out, $.uint(98, 8), $.byteSliceHint)
							break
						}
						case 12:
						{
							out = $.append(out, $.uint(102, 8), $.byteSliceHint)
							break
						}
						case 10:
						{
							out = $.append(out, $.uint(110, 8), $.byteSliceHint)
							break
						}
						case 13:
						{
							out = $.append(out, $.uint(114, 8), $.byteSliceHint)
							break
						}
						case 9:
						{
							out = $.append(out, $.uint(116, 8), $.byteSliceHint)
							break
						}
						default:
						{
							out = $.append(out, $.uint(117, 8), $.byteSliceHint)
							out = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes("0000", 1 + (globalThis.Math.trunc((bits.Len32($.uint(r, 32)) - 1) / 4)), undefined)), $.byteSliceHint)
							out = strconv.AppendUint(out, $.uint64(r), 16)
							break
						}
					}
					_in = $.sliceStringOrBytes(_in, n, undefined)
					break
				}
				default:
				{
					let __goscriptShadow0: number = indexNeedEscapeInString($.sliceStringOrBytes(_in, n, undefined))
					let __goscriptAssign1_0: string = $.sliceStringOrBytes(_in, n + __goscriptShadow0, undefined)
					let __goscriptAssign1_1: $.Slice<number> = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes(_in, undefined, n + __goscriptShadow0)), $.byteSliceHint)
					_in = __goscriptAssign1_0
					out = __goscriptAssign1_1
					break
				}
			}
		}
	}
	out = $.append(out, $.uint(34, 8), $.byteSliceHint)
	return [out, null]
}

export function indexNeedEscapeInString(s: string): number {
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		const r = __goscriptRunes0.rune
		if ((((r < 32) || (r == 92)) || (r == 34)) || (r == 65533)) {
			return i
		}
	}
	return $.stringLen(s)
}

export function appendFloat(out: $.Slice<number>, n: number, bitSize: number): $.Slice<number> {
	switch ((true as boolean)) {
		case math.IsNaN(n):
		{
			return $.appendSlice(out, $.stringToBytes("\"NaN\""), $.byteSliceHint)
			break
		}
		case math.IsInf(n, 1):
		{
			return $.appendSlice(out, $.stringToBytes("\"Infinity\""), $.byteSliceHint)
			break
		}
		case math.IsInf(n, -1):
		{
			return $.appendSlice(out, $.stringToBytes("\"-Infinity\""), $.byteSliceHint)
			break
		}
	}

	// JSON number formatting logic based on encoding/json.
	// See floatEncoder.encode for reference.
	let fmt = 102
	{
		let abs = math.Abs(n)
		if (abs != 0) {
			if (((bitSize == 64) && ((abs < 1e-6) || (abs >= 1e21))) || ((bitSize == 32) && ((globalThis.Math.fround(abs) < 9.999999974752427e-07) || (globalThis.Math.fround(abs) >= 1.0000000200408773e+21)))) {
				fmt = 101
			}
		}
	}
	out = strconv.AppendFloat(out, n, fmt, -1, bitSize)
	if (fmt == 101) {
		let __goscriptShadow1: number = $.sliceLen(out)
		if ((((__goscriptShadow1 >= 4) && ($.arrayIndex(out!, __goscriptShadow1 - 4) == 101)) && ($.arrayIndex(out!, __goscriptShadow1 - 3) == 45)) && ($.arrayIndex(out!, __goscriptShadow1 - 2) == 48)) {
			$.sliceElems(out!)[$.sliceSlot(out!, __goscriptShadow1 - 2)] = $.arrayIndex(out!, __goscriptShadow1 - 1)
			out = $.goSlice(out, undefined, __goscriptShadow1 - 1)
		}
	}
	return out
}
